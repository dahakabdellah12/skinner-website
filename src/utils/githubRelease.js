import { useState, useEffect } from "react";
import { site } from "../data/site";

const CACHE_KEY = "skinner_github_latest_release";

export function useLatestRelease() {
  const [release, setRelease] = useState({
    version: site.version,
    name: `Skinner v${site.version}`,
    downloadUrl: site.downloadUrl,
    directZipUrl: site.directZipUrl,
    size: null,
    publishedAt: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchLatest() {
      try {
        // Try session storage first to avoid hitting GitHub API rate limits
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < 1000 * 60 * 5) { // 5-minute cache
            if (isMounted) setRelease(parsed.data);
            return;
          }
        }

        const res = await fetch(`https://api.github.com/repos/${site.githubRepo}/releases/latest`, {
          headers: { Accept: "application/vnd.github.v3+json" }
        });

        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        const data = await res.json();

        const tag = data.tag_name ? data.tag_name.replace(/^v/, "") : site.version;
        const assets = data.assets || [];

        // Automatically match the Windows setup installer (.exe) or zip archive
        const exeAsset = assets.find(a => a.name.toLowerCase().endsWith(".exe"));
        const zipAsset = assets.find(a => a.name.toLowerCase().endsWith(".zip"));

        const downloadUrl = exeAsset
          ? exeAsset.browser_download_url
          : (zipAsset ? zipAsset.browser_download_url : data.html_url);
        
        const directZipUrl = zipAsset ? zipAsset.browser_download_url : site.directZipUrl;
        const sizeBytes = exeAsset ? exeAsset.size : (zipAsset ? zipAsset.size : null);
        const sizeFormatted = sizeBytes ? `${(sizeBytes / (1024 * 1024)).toFixed(1)} MB` : null;

        const result = {
          version: tag,
          tagWithV: data.tag_name || `v${tag}`,
          name: data.name || `Skinner v${tag}`,
          downloadUrl,
          directZipUrl,
          size: sizeFormatted,
          publishedAt: data.published_at,
          loading: false,
          error: null
        };

        if (isMounted) {
          setRelease(result);
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: result }));
        }
      } catch (err) {
        if (isMounted) {
          // Graceful fallback to static site config
          setRelease(prev => ({
            ...prev,
            loading: false,
            error: err.message
          }));
        }
      }
    }

    fetchLatest();
    return () => { isMounted = false; };
  }, []);

  return release;
}
