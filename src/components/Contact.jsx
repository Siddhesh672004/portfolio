import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github } from "../assets";
import linkedin from "../assets/linkedin.png";
import g4g from "../assets/g4g.png";
import leetcode from "../assets/leetcode.png";
import VisitorCounter from "./VisitorCounter";

const links = {
  github: "https://github.com/Siddhesh672004",
  linkedin: "https://www.linkedin.com/in/siddhesh-chaudhari-117551294/",
  leetcode: "https://leetcode.com/u/Siddhesh_Chaudharii/",
  g4g: "https://www.geeksforgeeks.org/user/siddheshsgmr/",
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Siddhesh",
          from_email: form.email,
          to_email: "siddheshavic67@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      {/* Footer Section */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 pt-12 pb-8 border-t border-[#232631]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            {/* Logo/Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h3 className="text-white text-2xl font-bold">
                Siddhesh <span className="text-[#915eff]">Chaudhari</span>
              </h3>
              <p className="text-secondary text-sm mt-1">Full Stack Developer</p>
            </motion.div>

            {/* Navigation Links */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 md:gap-8"
            >
              {[
                { name: "About", href: "#About" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#works" },
                { name: "Contact", href: "#contact" }
              ].map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-secondary hover:text-white transition-colors duration-300 text-sm font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#915eff] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </motion.nav>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              {[
                { src: github, link: links.github, name: "GitHub" },
                { src: linkedin, link: links.linkedin, name: "LinkedIn" },
                { src: leetcode, link: links.leetcode, name: "LeetCode" },
                { src: g4g, link: links.g4g, name: "GeeksforGeeks" },
              ].map(({ src, link, name }, idx) => (
                <motion.a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-tertiary flex items-center justify-center hover:bg-[#915eff] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  whileHover={{ rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={name}
                >
                  <img 
                    src={src} 
                    alt={name}
                    className="w-4 h-4 object-contain" 
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#915eff] to-transparent mb-6"></div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center"
          >
            {/* Copyright */}
            <p className="text-secondary text-sm">
              &copy; 2024 Siddhesh Chaudhari. All rights reserved.
            </p>
            <VisitorCounter />

          </motion.div>
        </div>
      </motion.footer>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
