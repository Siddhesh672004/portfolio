import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import profileImage from "../assets/Myself.jpg";
import backgroundImage from "../assets/background.jpg";
import { SectionWrapper } from "../hoc";

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
      <div className="flex h-screen ">
        {/* Left Side */}
        <div className="flex-1 p-4">
          <div
            className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5 p-10`}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hello, <br />
                <span className="text-[#915eff]">I'm Siddhesh</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I design and deveop experiences that make  
                <br className="sm:block hidden" />  make people's lives simpler through Web apps. <br/>I work with HTML5, CSS3, JavaScript, and React.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center items-center h-full p-4">
          <img
            src={profileImage}
            alt="My Image"
            className="w-80 h-80 rounded-full border-4 border-[#915eff]"
          />
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
