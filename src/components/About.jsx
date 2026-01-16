import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { services, certifications } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  );
};

const CertificationCard = ({ index, title, issuer, date, badge, certificateImage }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardClick = () => {
    if (isMobile) {
      setIsHovered(!isHovered);
    }
  };

  return (
    <div className="w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[320px] flex-shrink-0 mx-auto">
      <motion.div 
        className="w-full green-pink-gradient p-[1px] rounded-[16px] sm:rounded-[20px] shadow-card h-full"
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        onClick={handleCardClick}
        whileHover={{ y: -3, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-tertiary rounded-[16px] sm:rounded-[20px] p-3 xs:p-4 sm:p-5 h-[260px] xs:h-[280px] sm:h-[320px] relative overflow-hidden cursor-pointer">
          {/* Front Side */}
          <motion.div
            className="flex flex-col items-center justify-center h-full"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ 
              opacity: isHovered ? 0 : 1,
              scale: isHovered ? 0.95 : 1,
            }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut"
            }}
          >
            <motion.div 
              className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 mb-2 xs:mb-3 sm:mb-4 p-1 xs:p-2 bg-white rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={badge} 
                alt={`${title} certification badge`} 
                className="w-full h-full object-contain"
              />
            </motion.div>
            <h3 className="text-white text-[12px] xs:text-[14px] sm:text-[16px] font-bold text-center mb-1 xs:mb-2 leading-[16px] xs:leading-[18px] sm:leading-[20px] px-1 xs:px-2">
              {title}
            </h3>
            <p className="text-secondary text-[10px] xs:text-[11px] sm:text-[13px] text-center mb-1 xs:mb-2 px-1 xs:px-2">
              {issuer}
            </p>
            <p className="text-secondary text-[9px] xs:text-[10px] sm:text-[11px] text-center">
              {date}
            </p>
            <motion.div 
              className="mt-2 xs:mt-3 sm:mt-4 text-center"
              animate={{ 
                opacity: isHovered ? 0 : 1,
                y: isHovered ? 5 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-[#915eff] text-[9px] xs:text-[10px] sm:text-[11px]">
                {isMobile ? 'Tap for details' : 'Hover for details'}
              </span>
            </motion.div>
          </motion.div>

          {/* Back Side - Certificate Details */}
          <motion.div
            className="absolute inset-0 p-3 xs:p-4 sm:p-5 flex flex-col justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.9,
            }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut"
            }}
            style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
          >
            <div className="w-full h-full flex flex-col justify-between">
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ 
                  y: isHovered ? 0 : 15,
                  opacity: isHovered ? 1 : 0
                }}
                transition={{ duration: 0.3, delay: 0.05 }}
              >
                <h3 className="text-white text-[11px] xs:text-[13px] sm:text-[15px] font-bold mb-1 xs:mb-2 sm:mb-3 text-center px-1">
                  {title}
                </h3>
                <div className="w-full min-h-[50px] xs:min-h-[60px] sm:min-h-[70px] bg-white rounded-md sm:rounded-lg p-1 sm:p-2 mb-1 xs:mb-2 sm:mb-3 shadow-lg">
                  <img 
                    src={certificateImage} 
                    alt={`${title} certificate`}
                    className="w-full min-h-[48px] xs:min-h-[58px] sm:min-h-[68px] object-cover rounded-sm sm:rounded"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ 
                  y: isHovered ? 0 : 15,
                  opacity: isHovered ? 1 : 0
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="text-secondary text-[8px] xs:text-[9px] sm:text-[10px] text-center px-1 leading-tight">
                  Issued by {issuer} • {date}
                </div>
                {isMobile && (
                  <div className="text-center mt-2">
                    <button 
                      onClick={handleCardClick}
                      className="text-[#915eff] text-[8px] xs:text-[9px] underline"
                    >
                      Tap to close
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const CertificationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);

  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width >= 1280) return 4;      // xl screens
      if (width >= 1024) return 3;      // lg screens  
      if (width >= 640) return 2;       // sm screens
      return 1;                         // mobile
    }
    return 1;
  };

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = getItemsPerView();
      setItemsPerView(newItemsPerView);
      const maxIndex = Math.max(0, certifications.length - newItemsPerView);
      if (currentIndex > maxIndex) {
        setCurrentIndex(maxIndex);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  const totalSlides = Math.max(0, certifications.length - itemsPerView + 1);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, totalSlides - 1));
  };

  // Enhanced touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < totalSlides - 1) {
      nextSlide();
    }
    if (isRightSwipe && currentIndex > 0) {
      prevSlide();
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-2 xs:px-4 sm:px-6">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {certifications.map((certification, index) => (
            <div
              key={certification.title}
              className="flex justify-center px-1 xs:px-2 sm:px-3"
              style={{ minWidth: `${100 / itemsPerView}%` }}
            >
              <CertificationCard index={index} {...certification} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-4 xs:mt-6 sm:mt-8 px-2">
        {/* Previous Button */}
        <motion.button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="bg-[#915eff] text-white p-2 xs:p-2.5 sm:p-3 rounded-full disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-[#7c3aed] transition-colors shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        {/* Dots Indicator */}
        <div className="flex space-x-1 xs:space-x-1.5 sm:space-x-2 max-w-[150px] xs:max-w-[200px] overflow-x-auto">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 rounded-full transition-colors flex-shrink-0 ${
                index === currentIndex ? 'bg-[#915eff]' : 'bg-gray-600'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Next Button */}
        <motion.button
          onClick={nextSlide}
          disabled={currentIndex === totalSlides - 1}
          className="bg-[#915eff] text-white p-2 xs:p-2.5 sm:p-3 rounded-full disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-[#7c3aed] transition-colors shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* Certificate Counter */}
      <div className="text-center mt-2 xs:mt-3 sm:mt-4">
        <span className="text-secondary text-[10px] xs:text-xs sm:text-sm">
          Showing {Math.min(itemsPerView, certifications.length)} of {certifications.length} certifications
        </span>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      {/* Introduction Section */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[15px] xs:text-[16px] sm:text-[17px] max-w-3xl leading-[26px] xs:leading-[28px] sm:leading-[30px]"
      >
        I am a skilled developer with expertise in React, Node.js, and the MERN
        stack. I specialize in creating dynamic, scalable web applications and
        have a strong foundation in C++. I am passionate about web development
        and continuously work to improve my skills and deliver effective
        solutions.
      </motion.p>

      {/* Services Section */}
      <div className='mt-16 xs:mt-18 sm:mt-20 flex flex-wrap gap-6 xs:gap-8 sm:gap-10 justify-center sm:justify-start'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* Certifications Section with Carousel */}
      <motion.div variants={textVariant()} className="mt-24 xs:mt-28 sm:mt-32">
        <p className={styles.sectionSubText}>Professional Credentials</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[15px] xs:text-[16px] sm:text-[17px] max-w-3xl leading-[26px] xs:leading-[28px] sm:leading-[30px]"
      >
        Here are the professional certifications and credentials I've earned to validate 
        my expertise in various technologies and methodologies. Each certification represents 
        my commitment to continuous learning and industry best practices.
      </motion.p>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-16 xs:mt-18 sm:mt-20"
      >
        <CertificationCarousel />
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
