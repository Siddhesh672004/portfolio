import { motion } from "framer-motion";

import React from "react";
import Typewriter from "typewriter-effect";
import { styles } from "../styles";
import profileImage from "../assets/Myself.jpg";
import { github } from "../assets";
import linkedin from "../assets/linkedin.png";
import g4g from "../assets/g4g.png";
import leetcode from "../assets/leetcode.png";
import "./Hero.css";
import resume from "../assets/Siddhesh-Chaudhari.pdf";
import { Tilt } from "react-tilt";

const links = {
  github_url: "https://github.com/Siddhesh672004",
  linkedin_url: "https://www.linkedin.com/in/siddhesh-chaudhari-117551294/",
  leetcode_url: "https://leetcode.com/u/Siddhesh_Chaudharii/",
  g4g_url: "https://www.geeksforgeeks.org/user/siddheshsgmr/",
};

const Hero = () => {
  return (
    <>
      <div
        id="About"
        className="relative z-10 py-20 mt-10 px-8 clip-path-custom"
      >
        <div className="absolute inset-0 flex justify-center items-center"></div>

        <motion.div className="relative flex pt- justify-center max-w-[1250px] mx-auto flex-col lg:flex-row items-center">
          <div className="order-2 lg:order-1 sm:text-left w-full flex flex-col  gap-4 items-center lg:items-start">
            <motion.div>
              <h1 className={`${styles.heroHeadText} text-center sm:text-left text-white pt-`}>
                Hello, <br /> <span className="text-[#915eff]">I'm Siddhesh</span>
              </h1>
              <div className="text-2xl text-white text-center sm:text-left font-semibold flex gap-2 items-center text-primary">
                I am a
                <span className="text-accent sm:text-left text-[#915eff] cursor-pointer">
                  <Typewriter
                    options={{
                      strings: [
                        "Full Stack Developer ",
                        "Web Designer",
                        "Problem Solver",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
            </motion.div>

            <motion.div>
              <p className="text-lg lg:text-xl text-secondary text-center lg:text-left opacity-95 mb-6">
                I design and develop experiences that make people's lives
                simpler through Web apps. I work with HTML5, CSS3, JavaScript, and React.
              </p>
            </motion.div>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              Check Resume
            </a>
          </div>

          <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end mb-8 lg:mb-0">
            <motion.div>
              <Tilt>
                <img
                  src={profileImage}
                  alt="Siddhesh Chaudhari"
                  className="rounded-full border-4 border-[#915eff] max-w-[350px] max-h-[350px] w-full h-full"
                />
              </Tilt>
              <div className="flex justify-center items-center gap-6 mt-10">
                {/* GitHub Icon */}
                <a
                  href={links.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="black-gradient w-16 h-16 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform bg-red-500"
                >
                  <img
                    src={github}
                    alt="GitHub"
                    className="w-10 h-10 rounded-full object-contain"
                  />
                </a>

                {/* LinkedIn Icon */}
                <a
                  href={links.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="black-gradient w-16 h-16 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform bg-blue-500"
                >
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="w-10 h-10 rounded-full object-contain"
                  />
                </a>

                {/* LeetCode Icon */}
                <a
                  href={links.leetcode_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="black-gradient w-16 h-16 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform bg-yellow-500"
                >
                  <img
                    src={leetcode}
                    alt="LeetCode"
                    className="w-10 h-10 rounded-full object-contain"
                  />
                </a>

                {/* GeeksforGeeks Icon */}
                <a
                  href={links.g4g_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="black-gradient w-16 h-16 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform bg-green-500"
                >
                  <img
                    src={g4g}
                    alt="GeeksforGeeks"
                    className="w-10 h-10 rounded-full object-contain"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
