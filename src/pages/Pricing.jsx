import PageHeader from "../components/common/PageHeader";
import PlanCard from "../components/pricing/PlanCard";
import { useLanguage } from "../context/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();
  const c = t("communityPage");

  return (
    <div className="container page-content">
      <PageHeader
        title={c.title}
        description={c.description}
      />
      <div className="pricing-grid pricing-grid-centered">
        {c.plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
  );
}
