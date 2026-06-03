import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Github = () => {
  const calendarTheme = {
    light: ["#0d0d14", "#0e3b35", "#0e6157", "#0aaf95", "#00f5d4"],
    dark: ["#0d0d14", "#0e3b35", "#0e6157", "#0aaf95", "#00f5d4"],
  };

  const [blockSize, setBlockSize] = useState(12);
  const [blockMargin, setBlockMargin] = useState(4);
  const [fontSize, setFontSize] = useState(14);

  useEffect(() => {
    const update = () => {
      const isSmall = window.innerWidth < 640;
      setBlockSize(isSmall ? 9 : 12);
      setBlockMargin(isSmall ? 3 : 4);
      setFontSize(isSmall ? 12 : 14);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col gap-3">
        <p className={styles.sectionSubText}>{"// Activity"}</p>
        <h2 className={`${styles.sectionHeadText} title-underline`}>
          Activity.
        </h2>
      </motion.div>

      <p className="mt-6 max-w-2xl text-text-secondary font-sans font-light text-[15px] sm:text-[16px] leading-relaxed">
        A live look at my GitHub — commits, streaks, and the languages I lean on most.
      </p>

      <motion.div
        variants={fadeIn("up", "tween", 0.1, 0.7)}
        className="mt-12 glass rounded-2xl p-5 sm:p-7"
      >
        <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_#00f5d4]" />
            <h3 className="font-display font-bold text-white text-[18px]">
              Contribution Graph
            </h3>
          </div>
          <a
            href="https://github.com/Siddhesh672004"
            target="_blank"
            rel="noopener noreferrer"
            className="pill pill-cyan"
          >
            @Siddhesh672004 →
          </a>
        </div>

        <div
          style={{
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            maxWidth: "100%",
            paddingBottom: "8px",
          }}
          className="no-scrollbar"
        >
          <GitHubCalendar
            username="Siddhesh672004"
            blockSize={blockSize}
            blockMargin={blockMargin}
            theme={calendarTheme}
            fontSize={fontSize}
            colorScheme="dark"
          />
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 0.7)}
        className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5"
      >
        <div className="glass rounded-2xl p-5 sm:p-7">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-display font-bold text-white text-[18px]">
              Most Used Languages
            </h3>
            <span className="font-mono-tag text-[10px] text-text-secondary uppercase tracking-[0.2em]">
              top-langs
            </span>
          </div>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Siddhesh672004&layout=compact&theme=transparent&title_color=00F5D4&text_color=F0F0F0&border_color=ffffff10&bg_color=00000000"
            alt="Most Used Languages"
            className="w-full mx-auto"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="glass rounded-2xl p-5 sm:p-7">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-display font-bold text-white text-[18px]">
              GitHub Streak
            </h3>
            <a
              href="https://github.com/Siddhesh672004"
              target="_blank"
              rel="noopener noreferrer"
              className="pill"
            >
              View →
            </a>
          </div>
          <img
            src="https://streak-stats.demolab.com/?user=Siddhesh672004&theme=transparent&ring=00F5D4&fire=FF6B35&currStreakLabel=00F5D4&sideLabels=8A8A9A&dates=8A8A9A&currStreakNum=F0F0F0&sideNums=F0F0F0&border=ffffff10&hide_border=false"
            alt="GitHub Streak"
            className="w-full mx-auto"
            loading="lazy"
            decoding="async"
          />
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Github, "github", "02");
