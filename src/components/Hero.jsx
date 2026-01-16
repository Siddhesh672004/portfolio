import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import profileImage from "../assets/Myself.jpg";
import { github } from "../assets";
import linkedin from "../assets/linkedin.png";
import g4g from "../assets/g4g.png";
import leetcode from "../assets/leetcode.png";
import resume from "../assets/Siddhesh_Chaudhari_SDE_LogiNext.pdf";

const links = {
  github: "https://github.com/Siddhesh672004",
  linkedin: "https://www.linkedin.com/in/siddhesh-chaudhari-117551294/",
  leetcode: "https://leetcode.com/u/Siddhesh_Chaudharii/",
  g4g: "https://www.geeksforgeeks.org/user/siddheshsgmr/",
};

const stagger = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, type: "spring", stiffness: 80, damping: 20 },
  }),
};

const Hero = () => {
  return (
    <section
      id="About"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-tr from-[#050210] via-[#0f0c22] to-[#050210] pt-20 sm:pt-16 md:pt-0"
    >
      {/* Decorative grid glow */}
      <div className="absolute inset-0 pointer-events-none hero-grid" />

      {/* CONTAINER */}
      <motion.div
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-[1250px] w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
      >
        {/* LEFT TEXT BLOCK */}
        <motion.div
          variants={stagger}
          custom={1}
          className="flex-1 text-center lg:text-left order-2 lg:order-1"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          >
            Hey&nbsp;there,
            <br className="hidden sm:block" /> I'm
            <span className="text-[#915eff]"> Siddhesh</span>
          </motion.h1>

          <motion.div 
            variants={stagger}
            custom={2}
            className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 flex flex-wrap justify-center lg:justify-start items-center gap-2"
          >
            <span>I&nbsp;am&nbsp;a</span>
            <span className="text-[#915eff] min-w-[200px] sm:min-w-[250px]">
              <Typewriter
                options={{
                  strings: ["Full-Stack Dev", "Web Designer", "Problem Solver"],
                  autoStart: true,
                  loop: true,
                  pauseFor: 2000,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </motion.div>

          <motion.p 
            variants={stagger}
            custom={3}
            className="mt-6 text-base sm:text-lg lg:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
           I create engaging and user-centric digital experiences focused on delivering seamless solutions that simplify and enhance everyday life for users.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div 
            variants={stagger}
            custom={4}
            className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-5"
          >
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-6 sm:px-7 py-3 font-bold text-white rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg cta-btn transform transition-transform hover:scale-105"
            >
              Resume
            </a>

            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-6 sm:px-7 py-3 font-bold text-[#915eff] rounded-full ring-2 ring-[#915eff] hover:bg-[#915eff]/10 transition-all transform hover:scale-105"
            >
              Hire Me
            </a>
          </motion.div>
        </motion.div>

        {/* AVATAR + SOCIALS */}
        <motion.div
          variants={stagger}
          custom={2}
          className="flex-1 flex flex-col items-center gap-6 lg:gap-8 order-1 lg:order-2 max-w-sm w-full"
        >
          {/* Avatar */}
          <Tilt 
            options={{
              max: 15,
              scale: 1.02,
              speed: 300,
              glare: false
            }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 60, duration: 1 }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72"
            >
              {/* Enhanced neon ring with pulse effect */}
              <div className="absolute inset-0 rounded-full hero-ring animate-spin-slow" />
              <div className="absolute inset-2 rounded-full hero-pulse" />
              <img
                src={profileImage}
                alt="Siddhesh Chaudhari"
                className="relative z-10 w-full h-full rounded-full object-cover border-4 border-[#915eff] shadow-2xl"
                loading="eager"
              />
            </motion.div>
          </Tilt>

          {/* Enhanced Social Icons */}
          <motion.div 
            variants={stagger}
            custom={5}
            className="flex gap-3 sm:gap-4 md:gap-6"
          >
            {[
              { 
                src: github, 
                link: links.github, 
                c: "bg-gradient-to-br from-gray-800 to-gray-900", 
                name: "GitHub",
                hoverColor: "hover:from-gray-700 hover:to-gray-800"
              },
              { 
                src: linkedin, 
                link: links.linkedin, 
                c: "bg-gradient-to-br from-blue-600 to-blue-800", 
                name: "LinkedIn",
                hoverColor: "hover:from-blue-500 hover:to-blue-700"
              },
              { 
                src: leetcode, 
                link: links.leetcode, 
                c: "bg-gradient-to-br from-yellow-500 to-orange-600", 
                name: "LeetCode",
                hoverColor: "hover:from-yellow-400 hover:to-orange-500"
              },
              { 
                src: g4g, 
                link: links.g4g, 
                c: "bg-gradient-to-br from-green-500 to-green-700", 
                name: "GeeksforGeeks",
                hoverColor: "hover:from-green-400 hover:to-green-600"
              },
            ].map(({ src, link, c, name, hoverColor }, idx) => (
              <motion.a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center ${c} ${hoverColor} social-icon-enhanced overflow-hidden group`}
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
                aria-label={name}
              >
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-full ripple-effect"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full glow-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <img 
                  src={src} 
                  alt={name}
                  className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain transform group-hover:scale-110 transition-transform duration-300" 
                />
                
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-full shine-effect opacity-0 group-hover:opacity-100"></div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
