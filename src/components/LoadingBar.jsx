import { useState, useEffect } from "react";

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setProgress(20);
    const t1 = setTimeout(() => setProgress(60), 300);
    const t2 = setTimeout(() => setProgress(80), 1200);

    const onLoad = () => {
      setProgress(100);
      setTimeout(() => setVisible(false), 600);
    };

    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "2px",
        width: `${progress}%`,
        background: "linear-gradient(90deg, #00F5D4, #7C3AED)",
        zIndex: 99999,
        transition:
          progress === 100
            ? "width 0.2s ease, opacity 0.4s ease 0.2s"
            : "width 0.8s ease",
        opacity: progress === 100 ? 0 : 1,
        pointerEvents: "none",
      }}
    />
  );
};

export default LoadingBar;
