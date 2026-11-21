import { Navigate, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import SiteLayout from "./components/layout/SiteLayout";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Download from "./pages/Download";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <LanguageProvider>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/download" element={<Download />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<Navigate to="/" replace />} />
          <Route path="/privacy" element={<Legal type="privacy" />} />
          <Route path="/terms" element={<Legal type="terms" />} />
          <Route path="/changelog" element={<Navigate to="/" replace />} />
          <Route path="/legal" element={<Navigate to="/terms" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SiteLayout>
    </LanguageProvider>
  );
}
