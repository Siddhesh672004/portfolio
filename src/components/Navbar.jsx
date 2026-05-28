import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating pill navbar — desktop & mobile */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(95%,920px)]"
      >
        <div
          className={`relative flex items-center justify-between gap-4 px-3 sm:px-5 py-2.5 rounded-full transition-colors duration-300 ${
            scrolled
              ? "bg-[rgba(13,13,20,0.92)] border border-white/10 shadow-[0_8px_28px_rgba(0,0,0,0.45)]"
              : "bg-[rgba(13,13,20,0.7)] border border-white/5"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              setActive("");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 pl-1 pr-2"
          >
            <img src={logo} alt="logo" className="w-7 h-7 object-contain" />
            <span className="hidden sm:inline font-display font-bold text-white text-[15px] tracking-tight">
              Siddhesh<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.title;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setActive(link.title)}
                    className={`relative px-4 py-2 text-[13px] font-medium tracking-wide font-sans transition-colors ${
                      isActive ? "text-white" : "text-text-secondary hover:text-white"
                    }`}
                  >
                    {link.title}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent shadow-[0_0_10px_#00f5d4]"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Hire CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent text-[#050508] text-[12px] font-semibold font-sans tracking-wide transition-all hover:scale-[1.04] hover:shadow-[0_0_24px_rgba(0,245,212,0.45)]"
            >
              Hire Me <span aria-hidden="true">→</span>
            </a>

            <button
              onClick={() => setToggle((t) => !t)}
              className="md:hidden w-9 h-9 rounded-full border border-white/10 flex items-center justify-center bg-white/5"
              aria-label="Toggle menu"
            >
              <span className="relative w-4 h-3 inline-block">
                <span
                  className={`absolute left-0 right-0 h-px bg-white transition-all ${
                    toggle ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 right-0 top-1.5 h-px bg-white transition-all ${
                    toggle ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 right-0 h-px bg-white transition-all ${
                    toggle ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-[rgba(5,5,8,0.98)] flex items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-7">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(false);
                    }}
                    className="font-display font-extrabold text-white text-4xl tracking-tight hover:text-accent transition-colors"
                  >
                    {link.title}.
                  </a>
                </motion.li>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setToggle(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * navLinks.length + 0.1 }}
                className="mt-4 btn-primary"
              >
                Hire Me <span aria-hidden="true">→</span>
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
