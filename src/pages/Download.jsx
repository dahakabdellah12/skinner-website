import PageHeader from "../components/common/PageHeader";
import Button from "../components/common/Button";
import { Download as DownloadIcon } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useLatestRelease } from "../utils/githubRelease";

export default function Download() {
  const { t } = useLanguage();
  const d = t("downloadPage");
  const release = useLatestRelease();

  const versionTag = release.tagWithV || `v${release.version}`;
  const downloadText = d.downloadMain.replace("{version}", versionTag);
  const cardSubtitle = d.cardSubtitle.replace("{version}", release.version);

  return (
    <div className="container page-content narrow-page">
      <PageHeader
        title={d.title}
        description={d.description}
      />
      <section className="download-card">
        <h2>{d.cardTitle}</h2>
        <p className="muted">{cardSubtitle}</p>

        {release.downloadUrl ? (
          <Button href={release.downloadUrl} className="download-main">
            <DownloadIcon size={18} /> {downloadText}
          </Button>
        ) : (
          <button className="button button-disabled full-button" disabled>
            <DownloadIcon size={18} /> {d.downloadComingSoon}
          </button>
        )}
      </section>
    </div>
  );
}
