import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import SiteLayout from "./components/layout/SiteLayout";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Home from "./pages/Home";

// Route-level code splitting for performance and bundle size optimization
const Features = lazy(() => import("./pages/Features"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Download = lazy(() => import("./pages/Download"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Support = lazy(() => import("./pages/Support"));
const Legal = lazy(() => import("./pages/Legal"));
const NotFound = lazy(() => import("./pages/NotFound"));

function RouteLoading() {
  return (
    <div style={{ minHeight: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          border: "2px solid rgba(255, 255, 255, 0.12)",
          borderTopColor: "#3b82f6",
          animation: "spinAround 0.75s linear infinite"
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <SiteLayout>
          <Suspense fallback={<RouteLoading />}>
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
          </Suspense>
        </SiteLayout>
      </LanguageProvider>
    </ErrorBoundary>
  );
}
