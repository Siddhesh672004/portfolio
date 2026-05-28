import { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    const url = hasVisited
      ? `https://api.counterapi.dev/v1/siddhesh-portfolio/siddhesh-portfolio/`
      : `https://api.counterapi.dev/v1/siddhesh-portfolio/siddhesh-portfolio/up`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        if (!hasVisited) localStorage.setItem("hasVisited", "true");
      })
      .catch((err) => console.error("Failed to fetch visitor count:", err));
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass font-mono-tag text-[11px] uppercase tracking-[0.18em] text-text-secondary">
      <span className="relative inline-flex w-2 h-2">
        <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-60 animate-pulse-dot" />
        <span className="relative inline-flex rounded-full w-2 h-2 bg-accent" />
      </span>
      Visitors{" "}
      <span className="text-white">
        {count !== null ? count.toLocaleString() : "—"}
      </span>
    </div>
  );
};

export default VisitorCounter;
