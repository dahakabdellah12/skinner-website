import PageHeader from "../components/common/PageHeader";
import { useLanguage } from "../context/LanguageContext";

const featureScreenshots = [
  { id: "legends", img: "https://i.ibb.co/RpWBjrT0/preview-legends.jpg", labelKey: "tabLegends" },
  { id: "customizer", img: "https://i.ibb.co/nM7PTn1f/preview-customizer.png", labelKey: "tabCustomizer" },
  { id: "ko-grid", img: "https://i.ibb.co/9kJLNT9P/preview-ko-grid.jpg", labelKey: "tabKoGrid" },
  { id: "ko-detail", img: "https://i.ibb.co/350G4cp8/preview-ko-detail.jpg", labelKey: "tabKoDetail" }
];

export default function Features() {
  const { t } = useLanguage();
  const f = t("featuresPage");

  return (
    <div className="container page-content">
      <PageHeader
        title={f.showcaseTitle}
        description={f.showcaseDesc}
      />
      <div className="showcase-grid">
        {featureScreenshots.map((s) => (
          <div className="showcase-card" key={s.id}>
            <div className="showcase-img-wrap">
              <img src={s.img} alt="Skinner Preview" loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
