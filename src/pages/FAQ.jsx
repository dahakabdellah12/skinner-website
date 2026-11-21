import { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function FAQ() {
  const [active, setActive] = useState(0);
  const { t } = useLanguage();
  const f = t("faqPage");

  return (
    <div className="container page-content narrow-page">
      <PageHeader
        title={f.title}
        description={f.description}
      />
      <div className="faq-list">
        {f.items.map((item, index) => {
          const isOpen = active === index;
          return (
            <article className={`faq-item ${isOpen ? "faq-open" : ""}`} key={item.q}>
              <button
                type="button"
                className="faq-question"
                onClick={() => setActive(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <ChevronDown size={18} className="faq-arrow" />
              </button>
              <div className="faq-collapse">
                <div className="faq-answer-inner">
                  <div className="faq-answer">{item.a}</div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
