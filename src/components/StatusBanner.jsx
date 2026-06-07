import { useState } from "react";

const StatusBanner = () => {
  const [dismissed, setDismissed] = useState(
    () =>
      typeof window !== "undefined" &&
      sessionStorage.getItem("banner-dismissed") === "true"
  );

  if (dismissed) return null;

  const dismiss = () => {
    sessionStorage.setItem("banner-dismissed", "true");
    setDismissed(true);
  };

  return (
    <div
      style={{
        width: "100%",
        background: "rgba(0,245,212,0.05)",
        borderBottom: "1px solid rgba(0,245,212,0.15)",
        padding: "8px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        position: "relative",
        fontFamily: "DM Sans, sans-serif",
        flexWrap: "wrap",
      }}
    >
      <span
        style={{
          position: "relative",
          width: "8px",
          height: "8px",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "#22c55e",
            animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
            opacity: 0.75,
          }}
        />
        <span
          style={{
            position: "relative",
            display: "block",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#22c55e",
          }}
        />
      </span>

      <span style={{ fontSize: "13px", color: "#8A8A9A" }}>
        Available for full-time roles & freelance projects · Graduating B.Tech AI & DS, 2026
      </span>

      <a
        href="#contact"
        style={{
          fontSize: "12px",
          color: "#00F5D4",
          border: "1px solid rgba(0,245,212,0.35)",
          padding: "3px 12px",
          borderRadius: "20px",
          textDecoration: "none",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(0,245,212,0.1)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        Let&rsquo;s talk →
      </a>

      <button
        onClick={dismiss}
        aria-label="Dismiss"
        style={{
          position: "absolute",
          right: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "transparent",
          border: "none",
          color: "#8A8A9A",
          cursor: "pointer",
          fontSize: "16px",
          padding: "4px",
          lineHeight: 1,
        }}
      >
        ×
      </button>
    </div>
  );
};

export default StatusBanner;
