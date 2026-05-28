import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const FeaturedProject = ({ project }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = project.image;
  }, [project.image]);

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.1, 0.7)}
      className="relative w-full glass hover-glow rounded-3xl overflow-hidden group min-h-[420px]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        {loaded && (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover opacity-25 group-hover:opacity-40 transition-opacity duration-700"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#050508] via-[#050508]/85 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 sm:p-12 flex flex-col gap-6 min-h-[420px] justify-end">
        <div className="flex items-center gap-3">
          <span className="pill pill-cyan">Featured</span>
          <span className="font-mono-tag text-[11px] uppercase tracking-[0.2em] text-text-secondary/70">
            01 — Latest
          </span>
        </div>

        <h3 className="font-display font-extrabold text-white text-3xl sm:text-5xl leading-[1.05] tracking-tight max-w-3xl">
          {project.name}.
        </h3>

        <p className="max-w-2xl text-text-secondary font-sans font-light text-[15px] sm:text-[16px] leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag.name} className="pill">
              #{tag.name}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View Code <span aria-hidden="true">→</span>
          </a>
          <a
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <img src={github} alt="github" className="w-4 h-4 object-contain invert opacity-80" />
            Source
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = image;
  }, [image]);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.55)}
      whileHover={{ y: -8 }}
      className="relative glass rounded-2xl overflow-hidden group h-full flex flex-col border-l-2 border-transparent hover:border-accent transition-all"
    >
      <Tilt
        glareEnable={false}
        tiltMaxAngleX={4}
        tiltMaxAngleY={4}
        scale={1.01}
        transitionSpeed={1200}
        className="h-full flex flex-col"
      >
        <div className="relative h-44 sm:h-48 overflow-hidden">
          {!loaded && (
            <div className="absolute inset-0 bg-white/5 animate-pulse flex items-center justify-center">
              <span className="font-mono-tag text-[10px] text-text-secondary">loading</span>
            </div>
          )}
          {loaded && (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
          <div className="absolute top-3 right-3 flex items-center gap-2">
            <span className="font-mono-tag text-[11px] text-text-secondary/80 bg-black/40 px-2 py-1 rounded">
              {String(index + 1).padStart(2, "0")}
            </span>
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Source for ${name}`}
              className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:border-accent/50"
            >
              <img src={github} alt="" className="w-3.5 h-3.5 object-contain" />
            </a>
          </div>
        </div>

        <div className="p-5 flex flex-col gap-3 flex-1">
          <h3 className="font-display font-bold text-white text-[20px] leading-tight">
            {name}.
          </h3>
          <p className="text-text-secondary text-[13px] leading-relaxed line-clamp-3">
            {description}
          </p>
          <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
            {tags.map((t) => (
              <span
                key={`${name}-${t.name}`}
                className="font-mono-tag text-[10px] uppercase tracking-wide text-text-secondary px-2 py-0.5 rounded border border-white/10"
              >
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col gap-3">
        <p className={styles.sectionSubText}>{"// Work"}</p>
        <h2 className={`${styles.sectionHeadText} title-underline`}>
          Selected Work.
        </h2>
      </motion.div>

      <p className="mt-6 max-w-2xl text-text-secondary font-sans font-light text-[15px] sm:text-[16px] leading-relaxed">
        Real-world projects where ideas met code, design, and shipped outcomes.
        Each one solves a focused problem with intention.
      </p>

      <div className="mt-12">
        <FeaturedProject project={featured} />
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {rest.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index + 1} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works", "06");
