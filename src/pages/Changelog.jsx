import PageHeader from "../components/common/PageHeader";
import { releases } from "../data/releases";
import { Check, Tag, ExternalLink } from "lucide-react";
import { site } from "../data/site";
import Button from "../components/common/Button";
import { useLanguage } from "../context/LanguageContext";

export default function Changelog() {
  const { t } = useLanguage();
  const c = t("changelogPage");

  return (
    <div className="container page-content narrow-page">
      <PageHeader
        eyebrow={c.eyebrow}
        title={c.title}
        description={c.description}
      />
      <div className="timeline">
        {releases.map((release) => (
          <article className="release-entry" key={release.version}>
            <div className="timeline-marker"><Tag size={16} /></div>
            <div className="release-meta">
              <span className="version-tag">v{release.version}</span>
              <span>{release.date}</span>
              <span className="release-channel">{release.channel}</span>
            </div>
            <h2>{release.summary}</h2>
            <ul className="release-list">
              {release.changes.map((change) => (
                <li key={change}><Check size={15} />{change}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "32px" }}>
        <Button href={site.githubUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
          {c.githubBtn} <ExternalLink size={14} />
        </Button>
      </div>
      <p className="disclaimer">
        {c.disclaimer}
      </p>
    </div>
  );
}
