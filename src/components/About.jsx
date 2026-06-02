import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { services, certifications } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.15 * index, 0.6)}
      whileHover={{ y: -6 }}
      className="relative glass hover-glow rounded-2xl p-6 sm:p-8 min-h-[200px] flex flex-col justify-between group"
    >
      <div className="flex items-start justify-between">
        <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/40 transition-colors">
          <img src={icon} alt={title} loading="lazy" decoding="async" className="w-8 h-8 object-contain" />
        </div>
        <span className="font-mono-tag text-[11px] text-text-secondary/60 group-hover:text-accent transition-colors">
          0{index + 1}
        </span>
      </div>
      <div>
        <h3 className="font-display font-bold text-white text-[20px] mt-6 leading-tight">
          {title.trim()}.
        </h3>
        <div className="flex items-center justify-between mt-3">
          <p className="text-text-secondary text-[13px] font-sans font-light">
            Crafted with care.
          </p>
          <span className="text-accent text-lg group-hover:translate-x-1 transition-transform" aria-hidden="true">
            →
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const CertificationCard = ({ title, issuer, date, badge, certificateImage, index, shouldLoadImage }) => {
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      onMouseEnter={() => !isMobile && setFlipped(true)}
      onMouseLeave={() => !isMobile && setFlipped(false)}
      onClick={() => isMobile && setFlipped((v) => !v)}
      className="relative w-full max-w-[320px] mx-auto h-[300px] cursor-pointer"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 glass rounded-2xl p-5 flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex items-start justify-between">
            <div className="w-12 h-12 rounded-lg bg-white/95 flex items-center justify-center p-1.5">
              <img src={badge} alt={issuer} loading="lazy" decoding="async" className="w-full h-full object-contain" />
            </div>
            <span className="pill pill-cyan">{date.split(" ").pop()}</span>
          </div>
          <h3 className="mt-6 font-display font-bold text-white text-[18px] leading-tight">
            {title}
          </h3>
          <p className="mt-2 text-text-secondary text-[13px]">{issuer}</p>
          <div className="mt-auto flex items-center justify-between">
            <span className="font-mono-tag text-[10px] uppercase tracking-[0.2em] text-text-secondary/60">
              {date}
            </span>
            <span className="text-accent text-[12px] font-mono-tag">
              {isMobile ? "tap" : "hover"} →
            </span>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 glass rounded-2xl p-3 overflow-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="w-full h-full rounded-xl overflow-hidden bg-white/5">
            {shouldLoadImage ? (
              <img src={certificateImage} alt={title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full" aria-hidden="true" />
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CertificationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  const getItemsPerView = () => {
    if (typeof window !== "undefined") {
      const w = window.innerWidth;
      if (w >= 1280) return 4;
      if (w >= 1024) return 3;
      if (w >= 640) return 2;
      return 1;
    }
    return 1;
  };

  useEffect(() => {
    const onResize = () => {
      const v = getItemsPerView();
      setItemsPerView(v);
      const maxIndex = Math.max(0, certifications.length - v);
      setCurrentIndex((c) => Math.min(c, maxIndex));
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const totalSlides = Math.max(1, certifications.length - itemsPerView + 1);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          {certifications.map((c, i) => {
            const shouldLoad =
              i >= currentIndex - 1 && i <= currentIndex + itemsPerView;
            return (
              <div
                key={c.title + i}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <CertificationCard {...c} index={i} shouldLoadImage={shouldLoad} />
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="flex items-center justify-between mt-8">
        <button
          aria-label="Previous"
          onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
          disabled={currentIndex === 0}
          className="w-10 h-10 rounded-full glass flex items-center justify-center disabled:opacity-30 hover:border-accent/50 transition-all"
        >
          ←
        </button>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                padding: "12px 4px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: i === currentIndex ? "24px" : "8px",
                  height: "3px",
                  borderRadius: "2px",
                  background:
                    i === currentIndex ? "#00F5D4" : "rgba(255,255,255,0.25)",
                  transition: "width 0.3s ease, background 0.3s ease",
                }}
              />
            </button>
          ))}
        </div>

        <button
          aria-label="Next"
          onClick={() => setCurrentIndex((i) => Math.min(totalSlides - 1, i + 1))}
          disabled={currentIndex === totalSlides - 1}
          className="w-10 h-10 rounded-full glass flex items-center justify-center disabled:opacity-30 hover:border-accent/50 transition-all"
        >
          →
        </button>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col gap-3">
        <p className={styles.sectionSubText}>{"// Introduction"}</p>
        <h2 className={`${styles.sectionHeadText} title-underline`}>What I Do.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 0.8)}
        className="mt-6 max-w-2xl text-text-secondary font-sans font-light text-[15px] sm:text-[16px] leading-relaxed"
      >
        I&rsquo;m a developer who blends thoughtful design with engineering rigor.
        From AI-driven systems to clean React frontends and scalable Node backends,
        I build digital products that feel as good as they perform.
      </motion.p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>

      <motion.div variants={textVariant()} className="mt-28 flex flex-col gap-3">
        <p className={styles.sectionSubText}>{"// Credentials"}</p>
        <div className="flex items-center gap-4 flex-wrap">
          <h2 className={`${styles.sectionHeadText} title-underline`}>
            Certifications.
          </h2>
          <span className="pill pill-cyan">{certifications.length} earned</span>
        </div>
      </motion.div>

      <motion.div variants={fadeIn("up", "tween", 0.2, 0.8)} className="mt-12">
        <CertificationCarousel />
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about", "01");
