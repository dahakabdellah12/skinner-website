import PageHeader from "../components/common/PageHeader";
import { site } from "../data/site";
import { Star, ExternalLink } from "lucide-react";
import Button from "../components/common/Button";
import { useLanguage } from "../context/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();
  const c = t("communityPage");

  return (
    <div className="container page-content narrow-page">
      <PageHeader
        title={c.title}
        description={c.description}
      />

      <div className="community-supporter-content">
        <div className="community-star-bare">
          <Star size={46} className="community-star-icon" color="#ffffff" strokeWidth={1.5} />
        </div>
        <h3>{c.supporterTitle}</h3>
        <p>{c.supporterDesc}</p>

        <ul className="supporter-features-list">
          {c.features.map((feat) => (
            <li key={feat}>{feat}</li>
          ))}
        </ul>

        <div className="community-actions">
          <Button href={site.githubUrl} target="_blank" rel="noopener noreferrer" variant="primary" className="community-btn">
            <Star size={16} /> {c.starBtn}
          </Button>
          <Button href={site.discordUrl} target="_blank" rel="noopener noreferrer" variant="secondary" className="community-btn">
            {c.discordBtn} <ExternalLink size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
