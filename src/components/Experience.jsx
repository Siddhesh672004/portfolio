import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Tech tags inferred from points text — keeps data shape unchanged.
const inferTags = (points = []) => {
  const text = points.join(" ").toLowerCase();
  const candidates = [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "JavaScript",
    "TypeScript",
    "MySQL",
    "PHP",
    "jQuery",
    "HTML",
    "CSS",
    "Git",
    "REST API",
  ];
  return candidates.filter((c) =>
    text.includes(c.toLowerCase().replace(".js", ""))
  );
};

const ExperienceItem = ({ experience, index, isLast }) => {
  const tags = inferTags(experience.points);
  const isFreelance = /infotech|geeks|iitihaasa/i.test(experience.company_name);

  return (
    <motion.li
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      className="relative pl-12 sm:pl-16 pb-12 last:pb-0"
    >
      {/* Vertical line */}
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[14px] sm:left-[18px] top-7 bottom-0 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent"
        />
      )}

      {/* Node */}
      <span
        aria-hidden="true"
        className="absolute left-[7px] sm:left-[11px] top-1.5 w-4 h-4 rounded-full bg-accent shadow-[0_0_18px_rgba(0,245,212,0.6)] ring-4 ring-[#050508]"
      />

      <div className="glass hover-glow rounded-2xl p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/95 flex items-center justify-center p-1">
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-[18px] sm:text-[20px] leading-tight">
                {experience.title}
              </h3>
              <p className="text-text-secondary text-[13px] mt-0.5">
                {experience.company_name}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="font-mono-tag text-[11px] uppercase tracking-[0.18em] text-text-secondary">
              {experience.date}
            </span>
            <span className={`pill ${isFreelance ? "pill-orange" : "pill-cyan"}`}>
              {isFreelance ? "Freelance" : "Full-time"}
            </span>
          </div>
        </div>

        <ul className="mt-5 space-y-2">
          {experience.points.map((p, i) => (
            <li
              key={i}
              className="text-text-secondary font-sans font-light text-[13.5px] leading-relaxed pl-5 relative"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-2 w-2 h-px bg-accent/60"
              />
              {p}
            </li>
          ))}
        </ul>

        {tags.length > 0 && (
          <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
            <span className="font-mono-tag text-[10px] uppercase tracking-wide text-text-secondary/60 mr-1">
              Stack —
            </span>
            {tags.map((t) => (
              <span
                key={t}
                className="font-mono-tag text-[10px] uppercase tracking-wide text-white px-2 py-0.5 rounded border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.li>
  );
};

const Experience = () => {
  const reversed = [...experiences].reverse();
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col gap-3">
        <p className={styles.sectionSubText}>{"// Experience"}</p>
        <h2 className={`${styles.sectionHeadText} title-underline`}>
          Where I&rsquo;ve Worked.
        </h2>
      </motion.div>

      <p className="mt-6 max-w-2xl text-text-secondary font-sans font-light text-[15px] sm:text-[16px] leading-relaxed">
        A timeline of the teams and products I&rsquo;ve had the chance to build with —
        most recent first.
      </p>

      <ol className="mt-12 max-w-3xl">
        {reversed.map((exp, i) => (
          <ExperienceItem
            key={`exp-${i}`}
            experience={exp}
            index={i}
            isLast={i === reversed.length - 1}
          />
        ))}
      </ol>
    </>
  );
};

export default SectionWrapper(Experience, "work", "04");
