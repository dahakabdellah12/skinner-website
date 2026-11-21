import { useState, useRef, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";
import Button from "../components/common/Button";
import { useLanguage } from "../context/LanguageContext";

const RESTING_TRANSFORM = "rotateY(-8deg) rotateX(4deg)";

export default function Home() {
  const { t } = useLanguage();
  const h = t("home");

  const wrapperRef = useRef(null);
  const [transform, setTransform] = useState(RESTING_TRANSFORM);
  const [isHovered, setIsHovered] = useState(false);
  const rafId = useRef(null);

  const handleMouseMove = (e) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = Math.max(-1, Math.min(1, (x - centerX) / centerX));
    const percentY = Math.max(-1, Math.min(1, (y - centerY) / centerY));

    // Smooth, stabilized 3D tilt
    const tiltX = -percentY * 10;
    const tiltY = percentX * 12;

    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      setTransform(`rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`);
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (rafId.current) cancelAnimationFrame(rafId.current);
    setTransform(RESTING_TRANSFORM);
  };

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>
            {h.heroTitlePrefix}<span>{h.heroTitleHighlight}</span>
          </h1>
          <p className="hero-description">{h.heroDesc}</p>
          <div className="hero-actions">
            <Button to="/download">
              <Download size={17} /> {h.downloadBtn}
            </Button>
            <Button to="/features" variant="secondary">
              {h.exploreBtn} <ArrowRight size={16} />
            </Button>
          </div>
        </div>
        <div className="hero-visual">
          {/* Static tilt wrapper prevents cursor jitter */}
          <div
            ref={wrapperRef}
            className="tilt-wrapper"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="real-app-card"
              style={{
                transform,
                transition: isHovered
                  ? "transform 0.12s cubic-bezier(0.2, 0, 0, 1), border-color 0.25s, box-shadow 0.25s"
                  : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s, box-shadow 0.25s"
              }}
            >
              <div className="real-app-screen">
                <img
                  src="/images/preview-customizer.png"
                  alt="Skinner UI Preview"
                  className="real-app-img"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
