import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import profileImage from "../assets/Myself.jpg";
import { github } from "../assets";
import linkedin from "../assets/linkedin.png";
import g4g from "../assets/g4g.png";
import leetcode from "../assets/leetcode.png";
import "./Hero.css";
import resume from "../assets/Siddhesh-Chaudhari.pdf";
const links = {
  github_url: "https://github.com/Siddhesh672004",
  linkedin_url: "https://www.linkedin.com/in/siddhesh-chaudhari-117551294/",
  leetcode_url: "https://leetcode.com/u/Siddhesh_Chaudharii/",
  g4g_url: "https://www.geeksforgeeks.org/user/siddheshsgmr/",
};

const Hero = () => {
  return (
    // <section className="relative w-full h-screen mx-auto">
    // <div
    //   className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
    // >
    //   <div className="flex flex-col justify-center items-center mt-5">
    //     <div className="w-5 h-5 rounded-full bg-[#915eff]" />
    //     <div className="w-1 sm:h-80 h-40 violet-gradient" />
    //   </div>
    //   <div>
    //     <h1 className={`${styles.heroHeadText} text-white`}>
    //       Hi, I'm <span className="text-[#915eff]">Siddhesh</span>
    //     </h1>
    //     <p className={`${styles.heroSubText} mt-2 text-white-100`}>
    //     I deveop Dynamic Web Applications
    //       <br className="sm:block hidden" /> with Modern JavaScript technologies.
    //     </p>
    //   </div>
    // </div>

    //   <ComputersCanvas />

    //   <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
    //     <a href="#about">
    //       <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
    //         <motion.div
    //           animate={{
    //             y: [0, 24,0]
    //           }}
    //           transition={{
    //             duration: 1.5,
    //             repeat: Infinity,
    //             repeatType: 'loop'
    //           }}
    //           className="w-3 h-3 rounded-full bg-secondary mb-1"
    //         />
    //       </div>
    //     </a>
    //   </div>
    // </section>
    <>
      <div className="flex h-screen">
        {/* Left Side */}
        <div className="flex flex-col p-4 ">
          <div
            className={`${styles.paddingX} relative inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5 p-10`}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-6 h-5 rounded-full bg-[#915eff]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hello, <br />
                <span className="text-[#915eff]">I'm Siddhesh</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100 mb-4`}>
                I design and develop experiences that make
                <br className="sm:block hidden" /> people's lives simpler
                through Web apps. <br /> I work with HTML5, CSS3, JavaScript,
                and React.
              </p>
              <a
                href={ resume }
                download="My_CV.pdf"
                className="bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md  hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center items-center p-4 ">
          <div className="w-1/1">
            <div className="flex flex-col justify-center items-center">
              {/* Profile Image */}
              <img
                src={profileImage}
                alt="My Image"
                className="w-80 h-80 rounded-full border-4 border-[#915eff]"
              />

              {/* Icon Section */}
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
            </div>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </>
  );
};

export default Hero;

