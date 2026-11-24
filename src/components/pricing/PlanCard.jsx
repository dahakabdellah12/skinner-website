import { Check, Download, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../../data/site";

export default function PlanCard({ plan }) {
  const isFree = plan.price === "$0";

  return (
    <article className="plan-card plan-flat">
      <h3>{plan.name}</h3>
      <p className="plan-description">{plan.description}</p>
      <div className="plan-price">
        {plan.price}
        <span>{plan.period}</span>
      </div>
      <ul className="check-list">
        {plan.features.map((feature) => (
          <li key={feature}>
            <Check size={16} />
            {feature}
          </li>
        ))}
      </ul>
      {isFree ? (
        <Link className="button button-primary full-button" to="/download">
          <Download size={16} /> {plan.buttonText || "Download Free"}
        </Link>
      ) : (
        <a
          className="button button-secondary full-button"
          href={site.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Star size={16} /> {plan.buttonText || "Star on GitHub"}
        </a>
      )}
    </article>
  );
}
