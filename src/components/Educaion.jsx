import { motion } from "framer-motion";

import { styles } from "../styles";
import { educations } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationItem = ({ edu, index, isLast }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      className="relative pl-12 sm:pl-16 pb-12 last:pb-0"
    >
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[14px] sm:left-[18px] top-7 bottom-0 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent"
        />
      )}
      <span
        aria-hidden="true"
        className="absolute left-[7px] sm:left-[11px] top-1.5 w-4 h-4 rounded-full bg-accent shadow-[0_0_18px_rgba(0,245,212,0.6)] ring-4 ring-[#050508]"
      />

      <div className="glass hover-glow rounded-2xl p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center p-1"
              style={{ background: edu.iconBg || "#fff" }}
            >
              <img
                src={edu.icon}
                alt={edu.company_name}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-[18px] sm:text-[20px] leading-tight">
                {edu.title}
              </h3>
              <p className="text-text-secondary text-[13px] mt-0.5">
                {edu.company_name}
              </p>
            </div>
          </div>
          <span className="font-mono-tag text-[11px] uppercase tracking-[0.18em] text-text-secondary">
            {edu.date}
          </span>
        </div>

        <ul className="mt-5 space-y-2">
          {edu.points.map((p, i) => (
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
      </div>
    </motion.li>
  );
};

const Education = () => {
  const reversed = [...educations].reverse();

  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col gap-3">
        <p className={styles.sectionSubText}>{"// Education"}</p>
        <h2 className={`${styles.sectionHeadText} title-underline`}>
          Academic Path.
        </h2>
      </motion.div>

      <p className="mt-6 max-w-2xl text-text-secondary font-sans font-light text-[15px] sm:text-[16px] leading-relaxed">
        Where curiosity met formal training — the foundations behind the engineering work.
      </p>

      <ol className="mt-12 max-w-3xl">
        {reversed.map((edu, i) => (
          <EducationItem
            key={`edu-${i}`}
            edu={edu}
            index={i}
            isLast={i === reversed.length - 1}
          />
        ))}
      </ol>
    </>
  );
};

export default SectionWrapper(Education, "education", "03");
