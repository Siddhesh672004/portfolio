import { useState, useRef } from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import linkedin from "../assets/linkedin.png";

import Hack1 from "../assets/Hackathons/Hack1.jpg";
import Hack2 from "../assets/Hackathons/Hack2.jpeg";
import Hack3 from "../assets/Hackathons/Hack3.jpeg";
import Hack4 from "../assets/Hackathons/Hack4.jpeg";

const hackathons = [
  {
    name: "Smart India Hackathon 2023",
    year: "2023",
    result: "Participant",
    description:
      "Built an AI-powered Android app that helps analyze mental health and supports early diagnosis, designed for a national-level competition to improve wellbeing awareness.",
    image: Hack1,
    linkedinUrl: "#",
  },
  {
    name: "Rota Tank 2.0",
    year: "2024",
    result: "Pitch Round",
    description:
      "Pitched Scrap Swap, our platform promoting circular economy by exchanging waste materials, at Rota Tank 2.0, learning valuable lessons to improve future presentations.",
    image: Hack2,
    linkedinUrl:
      "https://www.linkedin.com/posts/siddhesh-chaudhari1_racdypiemr-reusability-ideapitching-activity-7176522968754270208-biSq?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Smart India Hackathon 2024",
    year: "2024",
    result: "Top 25 (College)",
    description:
      "Competed in SIH 2024 with teams Tech Shield and Code Crafters, developing women safety and deepfake detection solutions; deepfake project ranked top 25 college-wide.",
    image: Hack3,
    linkedinUrl:
      "https://www.linkedin.com/posts/siddhesh-chaudhari1_sih2024-innovation-ai-activity-7234257679534174208-EtXI?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Codement Hackathon",
    year: "2024",
    result: "Participant",
    description:
      "Participated in Codement_24 hackathon with my amazing team at Nutan College, tackling challenges, learning, and celebrating tech innovation and collaboration together.",
    image: Hack4,
    linkedinUrl:
      "https://www.linkedin.com/posts/siddhesh-chaudhari1_codementabr24-ncer-techcommunity-activity-7184953866524737536-7FBw?utm_source=share&utm_medium=member_desktop",
  },
];

const HackCard = ({ hack, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay: index * 0.08, duration: 0.55 }}
    className="snap-start shrink-0 w-[85%] sm:w-[420px] md:w-[460px] glass hover-glow rounded-2xl overflow-hidden flex flex-col"
  >
    <div className="flex items-center justify-between px-5 pt-5">
      <span className="font-mono-tag text-[11px] uppercase tracking-[0.2em] text-text-secondary">
        {hack.year}
      </span>
      <span
        className={`pill ${
          /top|finalist|winner/i.test(hack.result) ? "pill-orange" : "pill-cyan"
        }`}
      >
        {hack.result}
      </span>
    </div>

    <div className="px-5 pt-4">
      <h3 className="font-display font-bold text-white text-[20px] sm:text-[22px] leading-tight">
        {hack.name}.
      </h3>
      <p className="mt-3 text-text-secondary text-[13.5px] font-sans font-light leading-relaxed">
        {hack.description}
      </p>
    </div>

    <div className="relative mt-5 mx-5 mb-5 rounded-xl overflow-hidden h-[200px]">
      <img
        src={hack.image}
        alt={hack.name}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/80 via-transparent to-transparent" />
      <a
        href={hack.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`LinkedIn post for ${hack.name}`}
        className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-[#0077b5] flex items-center justify-center hover:scale-110 transition-transform"
      >
        <img src={linkedin} alt="" loading="lazy" decoding="async" className="w-4 h-4 object-contain" />
      </a>
    </div>
  </motion.article>
);

const Hackathons = () => {
  const scrollerRef = useRef(null);
  const [hint, setHint] = useState(true);

  const scrollBy = (dir) => {
    setHint(false);
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: dir * 480, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col gap-3">
        <p className={styles.sectionSubText}>{"// Build Sprints"}</p>
        <h2 className={`${styles.sectionHeadText} title-underline`}>
          Hackathons.
        </h2>
      </motion.div>

      <div className="mt-6 flex items-end justify-between gap-4 flex-wrap">
        <p className="max-w-2xl text-text-secondary font-sans font-light text-[15px] sm:text-[16px] leading-relaxed">
          Late nights, fast iteration, sharper ideas — the build sprints that taught
          me how to ship under pressure.
        </p>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-accent/50 transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-accent/50 transition-colors"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onScroll={() => setHint(false)}
        className="mt-10 flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-6 sm:-mx-16 px-6 sm:px-16"
      >
        {hackathons.map((hack, i) => (
          <HackCard key={hack.name} hack={hack} index={i} />
        ))}
      </div>

      {hint && (
        <p className="mt-2 font-mono-tag text-[10px] uppercase tracking-[0.25em] text-text-secondary/60 md:hidden">
          ← swipe to explore →
        </p>
      )}
    </>
  );
};

export default SectionWrapper(Hackathons, "hackathons", "07");
