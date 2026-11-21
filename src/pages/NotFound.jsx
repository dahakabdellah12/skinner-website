import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();
  const n = t("notFoundPage");

  return (
    <div className="container not-found">
      <span className="error-code">{n.code}</span>
      <h1>{n.title}</h1>
      <p>{n.desc}</p>
      <Link to="/" className="button button-primary">
        <ArrowLeft size={16} /> {n.backBtn}
      </Link>
    </div>
  );
}
