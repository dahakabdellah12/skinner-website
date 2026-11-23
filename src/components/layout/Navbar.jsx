import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { FlagSA, FlagUS } from "../common/FlagIcons";

const navKeys = [
  { key: "home", path: "/", end: true },
  { key: "features", path: "/features" },
  { key: "community", path: "/pricing" },
  { key: "download", path: "/download" },
  { key: "faq", path: "/faq" },
  { key: "support", path: "/support" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langDropdownRef = useRef(null);

  const close = () => {
    setOpen(false);
    setIsLangOpen(false);
  };

  const { lang, setLang, t } = useLanguage();
  const navTexts = t("nav");

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="navbar-wrap">
      <nav className="navbar container">
        <div className="brand brand-static" aria-label="Skinner">
          <span className="brand-mark brand-mark-transparent">
            <img src="https://i.ibb.co/kss0dnZ4/logo.png" alt="Skinner" style={{ width: "30px", height: "30px", objectFit: "contain" }} />
          </span>
          <span className="brand-title">Skinner</span>
        </div>

        <div className="nav-links">
          {navKeys.map(({ key, path, end }) => (
            <NavLink
              key={path}
              to={path}
              end={end}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {navTexts[key]}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          {/* Minimal Language Flag Button */}
          <div className="lang-wrap" ref={langDropdownRef}>
            <button
              type="button"
              className="lang-flag-btn"
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-expanded={isLangOpen}
              aria-label="Change language"
            >
              {lang === "ar" ? <FlagSA size={24} /> : <FlagUS size={24} />}
            </button>

            {isLangOpen && (
              <div className="lang-popover-menu">
                <button
                  type="button"
                  className={`lang-popover-item ${lang === "ar" ? "active" : ""}`}
                  onClick={() => {
                    setLang("ar");
                    setIsLangOpen(false);
                  }}
                  aria-label="العربية"
                >
                  <FlagSA size={20} />
                  <span>العربية</span>
                </button>

                <button
                  type="button"
                  className={`lang-popover-item ${lang === "en" ? "active" : ""}`}
                  onClick={() => {
                    setLang("en");
                    setIsLangOpen(false);
                  }}
                  aria-label="English"
                >
                  <FlagUS size={20} />
                  <span>English</span>
                </button>
              </div>
            )}
          </div>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          {navKeys.map(({ key, path, end }) => (
            <NavLink
              key={path}
              to={path}
              end={end}
              onClick={close}
              className={({ isActive }) => (isActive ? "mobile-link active" : "mobile-link")}
            >
              {navTexts[key]}
            </NavLink>
          ))}
          <div className="mobile-lang-row">
            <button
              type="button"
              className={`mobile-lang-bare ${lang === "ar" ? "active" : ""}`}
              onClick={() => {
                setLang("ar");
                close();
              }}
              aria-label="العربية"
            >
              <FlagSA size={22} />
              <span>العربية</span>
            </button>
            <button
              type="button"
              className={`mobile-lang-bare ${lang === "en" ? "active" : ""}`}
              onClick={() => {
                setLang("en");
                close();
              }}
              aria-label="English"
            >
              <FlagUS size={22} />
              <span>English</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
