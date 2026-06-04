import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

/**
 * Tech section — performance-first.
 * Removed 13 individual WebGL Ball canvases (each was its own GL context).
 * Replaced with a static logo grid (desktop) + dual scrolling marquee.
 */
const Tech = () => {
  const half = Math.ceil(technologies.length / 2);
  const rowOne = technologies.slice(0, half);
  const rowTwo = technologies.slice(half);

  const TechPill = ({ name, icon }) => (
    <div className="shrink-0 flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-accent/40 transition-colors">
      <img
        src={icon}
        alt={name}
        loading="lazy"
        decoding="async"
        className="w-5 h-5 object-contain"
      />
      <span className="font-mono-tag text-[12px] text-white whitespace-nowrap">
        {name}
      </span>
    </div>
  );

  const MarqueeRow = ({ items, reverse }) => (
    <div className="overflow-hidden mask-fade">
      <div
        className={`marquee-track ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ willChange: "transform" }}
      >
        {[...items, ...items].map((t, i) => (
          <TechPill key={`${t.name}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col gap-3">
        <p className={styles.sectionSubText}>{"// Stack"}</p>
        <h2 className={`${styles.sectionHeadText} title-underline`}>
          Tech Arsenal.
        </h2>
      </motion.div>

      <p className="mt-6 max-w-2xl text-text-secondary font-sans font-light text-[15px] sm:text-[16px] leading-relaxed">
        The toolkit I reach for to ship reliable, performant products — front to back.
      </p>

      {/* Static featured grid (no WebGL) */}
      <div className="mt-12 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-3 sm:gap-4">
        {technologies.map((t) => (
          <div
            key={t.name}
            className="group aspect-square rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/40 hover:bg-white/[0.05] transition-all flex flex-col items-center justify-center gap-2 p-3"
          >
            <img
              src={t.icon}
              alt={t.name}
              loading="lazy"
              decoding="async"
              className="w-9 h-9 sm:w-11 sm:h-11 object-contain group-hover:scale-110 transition-transform"
            />
            <span className="font-mono-tag text-[9px] sm:text-[10px] text-text-secondary uppercase tracking-[0.1em] text-center leading-tight">
              {t.name}
            </span>
          </div>
        ))}
      </div>

      {/* Inline mask styles */}
      <style>{`.mask-fade{mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}`}</style>

      <div className="mt-10 flex flex-col gap-3">
        <MarqueeRow items={rowOne} />
        <MarqueeRow items={rowTwo} reverse />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech", "05");
