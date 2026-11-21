import PageHeader from "../components/common/PageHeader";
import { useLanguage } from "../context/LanguageContext";

export default function Legal({ type }) {
  const { t } = useLanguage();
  const l = t("legalPage");
  const privacy = type === "privacy";

  return (
    <div className="container page-content narrow-page legal-page">
      <PageHeader
        title={privacy ? l.privacyTitle : l.termsTitle}
        description={l.description}
      />

      {privacy ? (
        <>
          <h2>{l.dataTitle}</h2>
          <p>{l.dataText}</p>

          <h2>{l.assetTitle}</h2>
          <p>{l.assetText}</p>

          <h2>{l.networkTitle}</h2>
          <p>{l.networkIntro}</p>
          <ul style={{ color: "#aaa", fontSize: "12px", lineHeight: "1.8" }}>
            <li>{l.networkLi1}</li>
            <li>{l.networkLi2}</li>
          </ul>

          <h2>{l.indepTitle}</h2>
          <p>{l.indepText}</p>
        </>
      ) : (
        <>
          <h2>{l.indepTitle}</h2>
          <p>{l.indepText}</p>

          <h2>{l.licenseTitle}</h2>
          <p>{l.licenseText}</p>

          <h2>{l.usageTitle}</h2>
          <p>{l.usageText}</p>

          <h2>{l.warrantyTitle}</h2>
          <p>{l.warrantyText}</p>
        </>
      )}
      <p className="legal-date">Skinner Community Edition · 2026</p>
    </div>
  );
}
