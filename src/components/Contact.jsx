import { lazy, Suspense, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import LazyMount from "./LazyMount";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import { github } from "../assets";
import linkedin from "../assets/linkedin.png";
import leetcode from "../assets/leetcode.png";
import VisitorCounter from "./VisitorCounter";

// 3D Earthglobe design start here

const EarthCanvas = lazy(() => import("./canvas/Earth"));

const links = {
  github: "https://github.com/Siddhesh672004",
  linkedin: "https://www.linkedin.com/in/siddhesh-chaudhari-117551294/",
  leetcode: "https://leetcode.com/u/Siddhesh_Chaudharii/",
  email: "mailto:siddheshavic67@gmail.com",
};

const ContactRow = ({ label, value, href, icon }) => (
  <a
    href={href}
    target={href?.startsWith("http") ? "_blank" : undefined}
    rel="noopener noreferrer"
    className="group flex items-center justify-between gap-4 p-4 rounded-xl glass hover-glow transition-all"
  >
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="font-mono-tag text-[10px] uppercase tracking-[0.2em] text-text-secondary">
          {label}
        </span>
        <span className="text-white text-[14px] font-sans font-medium">
          {value}
        </span>
      </div>
    </div>
    <span
      className="text-accent text-lg group-hover:translate-x-1 transition-transform"
      aria-hidden="true"
    >
      →
    </span>
  </a>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

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
          setSuccess(true);
          setForm({ name: "", email: "", message: "" });
        },
        (err) => {
          setLoading(false);
          setError("Something went wrong. Please try again.");
          console.error(err);
        }
      );
  };

  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col gap-3">
        <p className={styles.sectionSubText}>{"// Contact"}</p>
        <h2 className={`${styles.sectionHeadText} title-underline`}>
          Let&rsquo;s Build Something.
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* LEFT — info + form */}
        <motion.div
          variants={slideIn("left", "tween", 0.15, 0.8)}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <p className="max-w-xl text-text-secondary font-sans font-light text-[15px] sm:text-[16px] leading-relaxed">
            Have a product idea, a freelance brief, or just want to say hi? My inbox
            is open and I respond fast. Pick whichever channel works best for you.
          </p>

          <div className="grid grid-cols-1 gap-3">
            <ContactRow
              label="Email"
              value="siddheshavic67@gmail.com"
              href={links.email}
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00F5D4" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              }
            />
            <ContactRow
              label="LinkedIn"
              value="/in/siddhesh-chaudhari"
              href={links.linkedin}
              icon={<img src={linkedin} alt="" loading="lazy" decoding="async" className="w-4 h-4 object-contain" />}
            />
            <ContactRow
              label="GitHub"
              value="@Siddhesh672004"
              href={links.github}
              icon={<img src={github} alt="" loading="lazy" decoding="async" className="w-4 h-4 object-contain" />}
            />
          </div>

          <div className="relative glass rounded-2xl p-6 sm:p-8 mt-4 overflow-hidden">
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col items-center justify-center py-10 text-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00F5D4" strokeWidth="2">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-white text-2xl">
                    Message sent.
                  </h3>
                  <p className="text-text-secondary text-[14px] max-w-sm">
                    Thanks for reaching out — I&rsquo;ll get back to you as soon as
                    possible.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="btn-outline mt-2"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-7"
                >
                  <div className="float-field">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder=" "
                      required
                    />
                    <label htmlFor="name">Your name</label>
                  </div>

                  <div className="float-field">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder=" "
                      required
                    />
                    <label htmlFor="email">Your email</label>
                  </div>

                  <div className="float-field">
                    <textarea
                      rows={5}
                      name="message"
                      id="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder=" "
                      required
                    />
                    <label htmlFor="message">Your message</label>
                  </div>

                  {error && (
                    <p className="text-[#FF6B35] text-[13px] font-mono-tag">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-accent text-[#050508] font-semibold font-sans tracking-wide transition-all hover:shadow-[0_0_30px_rgba(0,245,212,0.4)] disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                      →
                    </span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* RIGHT — Earth */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 0.8)}
          className="lg:col-span-5 h-[360px] sm:h-[460px] lg:h-auto lg:min-h-[600px] glass rounded-2xl overflow-hidden"
        >
          <LazyMount
            rootMargin="200px"
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-mono-tag text-[11px] text-text-secondary uppercase tracking-[0.2em]">
                  loading globe...
                </span>
              </div>
            }
          >
            <Suspense fallback={null}>
              <EarthCanvas />
            </Suspense>
          </LazyMount>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-24 pt-10"
      >
        <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent mb-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="font-display font-extrabold text-white text-2xl tracking-tight">
              Siddhesh<span className="text-accent">.</span>
            </h3>
            <p className="text-text-secondary text-[13px] mt-1 font-sans font-light">
              Building the future, one commit at a time.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { name: "About", href: "#about" },
              { name: "Experience", href: "#work" },
              { name: "Projects", href: "#works" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text-secondary hover:text-accent transition-colors text-[13px] font-sans font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {[
              { src: github, link: links.github, name: "GitHub" },
              { src: linkedin, link: links.linkedin, name: "LinkedIn" },
              { src: leetcode, link: links.leetcode, name: "LeetCode" },
            ].map(({ src, link, name }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:border-accent/50 hover:-translate-y-1 transition-all"
                aria-label={name}
              >
                <img src={src} alt={name} loading="lazy" decoding="async" className="w-3.5 h-3.5 object-contain" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 border-t border-white/5">
          <p className="text-text-secondary text-[12px] font-mono-tag tracking-wide">
            © 2026 Siddhesh Chaudhari · Built with React &amp; Three.js
          </p>
          <div className="flex items-center gap-4">
            <VisitorCounter />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-mono-tag text-[11px] uppercase tracking-[0.2em] text-text-secondary hover:text-accent transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default SectionWrapper(Contact, "contact", "08");
