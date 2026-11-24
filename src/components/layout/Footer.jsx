import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { site } from "../../data/site";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t("footer");
  const navTexts = t("nav");

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <div className="brand brand-static">
              <span className="brand-mark brand-mark-transparent">
                <img src="/logo.png" alt="Skinner" style={{ width: "28px", height: "28px", objectFit: "contain" }} />
              </span>
              <span className="brand-title">Skinner</span>
            </div>
            <p>{f.slogan}</p>
          </div>
          <div className="footer-column">
            <h4>{f.explore}</h4>
            <Link to="/">{navTexts.home}</Link>
            <Link to="/features">{navTexts.features}</Link>
            <Link to="/pricing">{navTexts.community}</Link>
            <Link to="/download">{navTexts.download}</Link>
            <Link to="/faq">{navTexts.faq}</Link>
          </div>
          <div className="footer-column">
            <h4>{f.community}</h4>
            <a href={site.discordUrl} target="_blank" rel="noopener noreferrer">Discord <ExternalLink size={13} /></a>
            <a href={site.githubUrl} target="_blank" rel="noopener noreferrer">GitHub <ExternalLink size={13} /></a>
            <Link to="/support">{f.support}</Link>
          </div>
          <div className="footer-column">
            <h4>{f.legal}</h4>
            <Link to="/privacy">{f.privacy}</Link>
            <Link to="/terms">{f.terms}</Link>
            <Link to="/faq">{navTexts.faq}</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Skinner. {f.rights}</span>
          <span className="independent-note">{f.disclaimer}</span>
        </div>
      </div>
    </footer>
  );
}
