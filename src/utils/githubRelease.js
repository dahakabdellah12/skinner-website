import { useState, useEffect } from "react";
import { site } from "../data/site";

const CACHE_KEY = "skinner_github_latest_release";
const CACHE_TTL_MS = 1000 * 60 * 15; // 15-minute cache to respect GitHub unauthenticated rate limits (60 req/hr)
const REQUEST_TIMEOUT_MS = 6000; // 6-second defensive timeout

function safeGetCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.timestamp === "number" && Date.now() - parsed.timestamp < CACHE_TTL_MS) {
      return parsed.data;
    }
  } catch {
    // SessionStorage may be restricted in private browsing modes
  }
  return null;
}

function safeSetCache(data) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data }));
  } catch {
    // Ignore storage quota/permission exceptions
  }
}

export function useLatestRelease() {
  const [release, setRelease] = useState(() => {
    const cached = safeGetCache();
    if (cached) {
      return { ...cached, loading: false };
    }
    return {
      version: site.version,
      tagWithV: `v${site.version}`,
      name: `Skinner v${site.version}`,
      downloadUrl: site.downloadUrl,
      directZipUrl: site.directZipUrl,
      size: null,
      publishedAt: null,
      loading: true,
      error: null
    };
  });

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    async function fetchLatest() {
      // If we already have fresh cached data, avoid extra network roundtrip
      const cached = safeGetCache();
      if (cached) {
        if (isMounted) setRelease({ ...cached, loading: false });
        clearTimeout(timeoutId);
        return;
      }

      try {
        const res = await fetch(`https://api.github.com/repos/${site.githubRepo}/releases/latest`, {
          signal: controller.signal,
          headers: { Accept: "application/vnd.github.v3+json" }
        });

        if (!res.ok) {
          // If GitHub rate limit reached (403) or not found (404), fallback cleanly
          throw new Error(`GitHub API returned status ${res.status}`);
        }

        const data = await res.json();
        const tag = data.tag_name ? data.tag_name.replace(/^v/, "") : site.version;
        const assets = Array.isArray(data.assets) ? data.assets : [];

        // Match the official Windows installer (.exe) or zip archive
        const exeAsset = assets.find((a) => a.name && a.name.toLowerCase().endsWith(".exe"));
        const zipAsset = assets.find((a) => a.name && a.name.toLowerCase().endsWith(".zip"));

        const downloadUrl = exeAsset
          ? exeAsset.browser_download_url
          : zipAsset
          ? zipAsset.browser_download_url
          : data.html_url || site.downloadUrl;

        const directZipUrl = zipAsset ? zipAsset.browser_download_url : site.directZipUrl;
        const sizeBytes = exeAsset ? exeAsset.size : zipAsset ? zipAsset.size : null;
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
          safeSetCache(result);
        }
      } catch (err) {
        if (isMounted) {
          // Seamless fallback to static config without crashing UI
          setRelease((prev) => ({
            ...prev,
            loading: false,
            error: err.name === "AbortError" ? "Request timed out" : err.message
          }));
        }
      } finally {
        clearTimeout(timeoutId);
      }
    }

    fetchLatest();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  return release;
}
