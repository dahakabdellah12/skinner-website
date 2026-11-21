import { Component } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // In production, errors can be reported to a client telemetry service
    if (process.env.NODE_ENV !== "production") {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          textAlign: "center"
        }}>
          <div style={{
            maxWidth: "480px",
            background: "#18181b",
            border: "1px solid #333",
            borderRadius: "16px",
            padding: "36px 28px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.7)"
          }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "rgba(239, 68, 68, 0.15)",
              color: "#ef4444",
              display: "grid",
              placeItems: "center",
              margin: "0 auto 16px"
            }}>
              <AlertTriangle size={28} />
            </div>
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#fff", margin: "0 0 10px" }}>
              Something went wrong / حدث خطأ غير متوقع
            </h2>
            <p style={{ color: "#999", fontSize: "13px", lineHeight: "1.7", margin: "0 0 24px" }}>
              An unexpected error occurred while rendering this view. Please refresh the page to restore Skinner Studio.
            </p>
            <button
              onClick={this.handleReset}
              className="button button-primary"
              style={{ minHeight: "44px", padding: "0 24px" }}
            >
              <RefreshCw size={16} /> Refresh Page / تحديث الصفحة
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
