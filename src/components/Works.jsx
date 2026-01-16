import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  // Preload image
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageSrc(image);
      setImageLoaded(true);
    };
    img.onerror = () => {
      setImageLoaded(true); // Still show card even if image fails
    };
    img.src = image;
  }, [image]);

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.2, 0.75)} // Reduced delay from 0.5 to 0.2
      className="w-full flex justify-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }} // Trigger earlier with less amount needed
    >
      <Tilt 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl w-full max-w-[360px] min-h-[400px]"
      >
        <div className="relative w-full h-[200px] sm:h-[230px]">
          {/* Skeleton loader */}
          {!imageLoaded && (
            <div className="w-full h-full bg-gray-700 rounded-2xl animate-pulse flex items-center justify-center">
              <div className="text-gray-500 text-sm">Loading...</div>
            </div>
          )}
          
          {/* Actual image */}
          {imageSrc && (
            <img
              src={imageSrc}
              alt={name}
              className={`w-full h-full object-cover rounded-2xl transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ display: imageLoaded ? 'block' : 'none' }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          )}

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div 
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer transition-all duration-200 hover:scale-110"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px] sm:text-[24px] leading-tight">{name}</h3>
          <p className="mt-2 text-secondary text-[12px] sm:text-[14px] leading-relaxed">{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] sm:text-[14px] ${tag.color} px-2 py-1 rounded`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Preload critical images
  useEffect(() => {
    const preloadImages = () => {
      projects.slice(0, 3).forEach(project => { // Preload first 3 images
        const img = new Image();
        img.src = project.image;
      });
    };

    preloadImages();
  }, []);

  return (
    <section id="works">
      <motion.div 
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}> Projects. </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[14px] sm:text-[17px] max-w-3xl leading-[24px] sm:leading-[30px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Container with min-height to prevent layout shift */}
      <div 
        className='mt-10 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7 w-full'
        style={{ minHeight: '400px' }} // Prevent layout shift
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  )
};

export default SectionWrapper(Works, "");
