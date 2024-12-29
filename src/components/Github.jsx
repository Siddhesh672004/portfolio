import React from "react";
import GitHubCalendar from "react-github-calendar";
import { color, motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const Github = () => {
  return (
    <>
      {/* GitHub Contribution Calendar */}
      <div>
        <row className="flex justify-center pb-5">
          <motion.h1
            variants={fadeIn("", "", 0.1, 1)}
            className="text-3xl font-semibold mb-5"
          >
            Days I <span className="text-purple-500">Code</span>
          </motion.h1>
        </row>
        <row className="flex justify-center pb-5">
          <div class="w-full flex justify-center p-4 sm:p-6 md:p-8 overflow-x-hidden">
            <div class="w-full max-w-screen-lg">
              <GitHubCalendar
                username="Siddhesh672004"
                blockSize={15}
                blockMargin={5}
                color="#c084f5"
                fontSize={16}
              />
            </div>
          </div>
        </row>
      </div>

      {/* Most Used Languages and GitHub Streak */}
      <div className="flex justify-center items-center p-5 flex-wrap">
        {/* Most Used Languages */}
        <div className="w-full sm:w-1/2 text-center mb-5">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Charudatta270104&layout=compact&theme=react&hide_border=true&bg_color=0D1117&title_color=FF6F91&text_color=C9D1D9"
            alt="Most Used Languages"
            className="rounded-lg w-3/4"
          />
        </div>

        {/* GitHub Streak */}
        <div className="w-full sm:w-1/2 text-center mb-5">
          <h2 className="text-2xl font-semibold text-purple-500 mb-3">
            GitHub Streak
          </h2>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=Charudatta270104&theme=react&hide_border=true&background=0D1117&currStreakLabel=FF6F91&fire=FF6F91&ring=FF6F91&currStreakNum=C9D1D9&sideNums=C9D1D9&sideLabels=C9D1D9&dates=C9D1D9"
            alt="GitHub Streak"
            className="rounded-lg w-3/4"
          />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Github, "");