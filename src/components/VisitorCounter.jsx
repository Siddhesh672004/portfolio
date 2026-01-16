import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
   
    if (!hasVisited) {
      // first time: increment & save
      fetch(`https://api.counterapi.dev/v1/siddhesh-portfolio/siddhesh-portfolio/up`)
        .then((res) => res.json())
        .then((data) => {
          setCount(data.count);
          localStorage.setItem("hasVisited", true);
        })
        .catch((err) => console.error("Failed to fetch visitor count:", err));
    } else {
      // already visited: just get count, don't increment
      fetch(`https://api.counterapi.dev/v1/siddhesh-portfolio/siddhesh-portfolio/`)
        .then((res) => res.json())
        .then((data) => {
          setCount(data.count);
        })
        .catch((err) => console.error("Failed to fetch visitor count:", err));
    }
  }, []);

  return (
    <div className="inline-flex items-center gap-2 text-gray-400 text-sm font-mono bg-gray-950 px-3 py-2 rounded border border-gray-800 shadow-sm">
      <span className="text-green-400">•</span>
      visitors: {count !== null ? count : "Loading..."}
    </div>
  );
};

export default VisitorCounter;
