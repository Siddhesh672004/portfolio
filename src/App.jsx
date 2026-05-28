import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components";
import Github from "./components/Github";
import Education from "./components/Educaion.jsx";
import Hackathons from "./components/Hackathons.jsx";

// Custom cursor is heavy on low-end devices — lazy + only mount when idle
const CustomCursor = lazy(() => import("./components/CustomCursor.jsx"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>

      {/* Lightweight grid texture (no mask, no mix-blend) */}
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
