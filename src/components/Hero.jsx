import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import { styles } from "../styles";
import LazyMount from "./LazyMount";
import { github } from "../assets";
import linkedin from "../assets/linkedin.png";
import leetcode from "../assets/leetcode.png";
import resume from "../assets/Siddhesh_Chaudhari_SDE_LogiNext.pdf";

const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const links = {
  github: "https://github.com/Siddhesh672004",
  linkedin: "https://www.linkedin.com/in/siddhesh-chaudhari-117551294/",
  leetcode: "https://leetcode.com/u/Siddhesh_Chaudharii/",
};

const wordStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const wordItem = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 90, damping: 18 } },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden pt-28 sm:pt-32 lg:pt-24"
    >
      {/* Static gradient blobs (CSS only, no JS animation on mobile) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full opacity-25 blur-[100px] hidden lg:block"
        style={{ background: "radial-gradient(circle, #00f5d4 0%, transparent 60%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-40 w-[360px] h-[360px] rounded-full opacity-20 blur-[100px] hidden lg:block"
        style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-7rem)]">
        {/* LEFT — text */}
        <motion.div
          variants={wordStagger}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <motion.div variants={wordItem} className="flex">
            <span className="pill pill-cyan">
              <span className="relative inline-flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-pulse-dot" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-accent" />
              </span>
              Available for Opportunities · 2026
              <span aria-hidden="true">→</span>
            </span>
          </motion.div>

          <motion.h1
            variants={wordItem}
            className={`${styles.heroHeadText} text-balance`}
          >
            Siddhesh
            <br />
            <span className="text-gradient">Chaudhari.</span>
          </motion.h1>

          <motion.div
            variants={wordItem}
            className="flex flex-wrap items-center gap-2 text-[18px] sm:text-[22px] font-sans font-light text-text-secondary"
          >
            <span>I craft</span>
            <span className="text-accent font-medium min-w-[180px] sm:min-w-[240px]">
              <Typewriter
                options={{
                  strings: [
                    "full-stack web apps.",
                    "AI-powered experiences.",
                    "scalable React systems.",
                    "thoughtful interfaces.",
                  ],
                  autoStart: true,
                  loop: true,
                  pauseFor: 1800,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </motion.div>

          <motion.p
            variants={wordItem}
            className="max-w-xl text-text-secondary font-sans font-light text-[15px] sm:text-[17px] leading-relaxed"
          >
            Final-year B.Tech AI &amp; Data Science engineer building production-grade
            React, Node.js and ML-driven products. Currently shaping ideas into shipped
            software, one commit at a time.
          </motion.p>

          <motion.div
            variants={wordItem}
            className="flex flex-wrap items-center gap-3 mt-2"
          >
            <a href="#works" className="btn-primary">
              View Projects <span aria-hidden="true">→</span>
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={wordItem} className="flex items-center gap-4 mt-4">
            <span className="font-mono-tag text-[11px] uppercase tracking-[0.25em] text-text-secondary/70">
              Find me
            </span>
            <span className="h-px w-8 bg-white/10" />
            {[
              { src: github, link: links.github, label: "GitHub" },
              { src: linkedin, link: links.linkedin, label: "LinkedIn" },
              { src: leetcode, link: links.leetcode, label: "LeetCode" },
            ].map(({ src, link, label }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center transition-all hover:border-accent/60 hover:-translate-y-1"
              >
                <img src={src} alt={label} className="w-4 h-4 object-contain opacity-80" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
          className="lg:col-span-5 relative h-[360px] sm:h-[480px] lg:h-[560px] w-full"
        >
          <div className="absolute inset-0 rounded-3xl glass overflow-hidden">
            <LazyMount
              rootMargin="100px"
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-mono-tag text-[11px] text-text-secondary uppercase tracking-[0.2em]">
                    rendering scene...
                  </span>
                </div>
              }
            >
              <Suspense fallback={null}>
                <ComputersCanvas />
              </Suspense>
            </LazyMount>
          </div>
          <div
            aria-hidden="true"
            className="absolute -inset-1 rounded-3xl pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,245,212,0.15), rgba(124,58,237,0.12))",
              filter: "blur(40px)",
              opacity: 0.4,
              zIndex: -1,
            }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="font-mono-tag text-[10px] uppercase tracking-[0.3em] text-text-secondary/70">
          Scroll
        </span>
        <a href="#about" aria-label="Scroll to about" className="w-7 h-12 rounded-full border border-white/15 flex items-start justify-center p-1.5">
          <motion.span
            animate={{ y: [0, 16, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="block w-1 h-2 rounded-full bg-accent"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
