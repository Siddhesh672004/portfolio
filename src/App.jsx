import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useGLTF } from "@react-three/drei";

import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components";
import Github from "./components/Github";
import Education from "./components/Educaion.jsx";
import Hackathons from "./components/Hackathons.jsx";
import LoadingBar from "./components/LoadingBar.jsx";
import StatusBanner from "./components/StatusBanner.jsx";

const CustomCursor = lazy(() => import("./components/CustomCursor.jsx"));

useGLTF.preload("/desktop_pc/scene.gltf");
useGLTF.preload("/planet/scene.gltf");

const App = () => {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(Math.min(100, Math.max(0, pct)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <BrowserRouter>
      <LoadingBar />

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "3px",
          width: `${scrollPct}%`,
          background: "linear-gradient(90deg, #00F5D4, #7C3AED)",
          zIndex: 9998,
          transition: "width 0.05s linear",
          pointerEvents: "none",
        }}
      />

      <StatusBanner />

      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>

      <div className="app-grid" aria-hidden="true" />

      <div className="relative z-10">
        <Navbar />

        <div className="relative z-0 bg-primary">
          <Hero />
        </div>

        <main className="relative z-0">
          <About />
          <Github />
          <Education />
          <Experience />
          <Tech />
          <Works />
          <Hackathons />
          <Contact />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
