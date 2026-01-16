import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import linkedin from "../assets/linkedin.png";

// Import all hackathon images
import Hack1 from "../assets/Hackathons/Hack1.jpg";
import Hack2 from "../assets/Hackathons/Hack2.jpeg";
import Hack3 from "../assets/Hackathons/Hack3.jpeg";
import Hack4 from "../assets/Hackathons/Hack4.jpeg";

// Add your hackathon data here with imported images
const hackathons = [
  {
    name: "Smart India Hackathon 2023",
    description: "Built an AI-powered Android app that helps analyze mental health and supports early diagnosis, designed for a national-level competition to improve wellbeing awareness.",
    image: Hack1, // Use imported image
    linkedinUrl: "#"
  },
  {
    name: "Rota Tank 2.0",
    description: "Pitched Scrap Swap, our platform promoting circular economy by exchanging waste materials, at Rota Tank 2.0, learning valuable lessons to improve future presentations.",
    image: Hack2, // Use imported image
    linkedinUrl: "https://www.linkedin.com/posts/siddhesh-chaudhari1_racdypiemr-reusability-ideapitching-activity-7176522968754270208-biSq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdFmGMBAyr2QvM4iyqgOP8fqrPNMjyBc98"
  },
  {
    name: "Smart India Hackathon 2024",
    description: "Competed in SIH 2024 with teams Tech Shield and Code Crafters, developing women safety and deepfake detection solutions; deepfake project ranked top 25 college-wide.",
    image: Hack3, // Use imported image
    linkedinUrl: "https://www.linkedin.com/posts/siddhesh-chaudhari1_sih2024-innovation-ai-activity-7234257679534174208-EtXI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdFmGMBAyr2QvM4iyqgOP8fqrPNMjyBc98"
  },
  {
    name: "Codement Hackathon",
    description: "Participated in Codement_24 hackathon with my amazing team at Nutan College, tackling challenges, learning, and celebrating tech innovation and collaboration together.",
    image: Hack4, // Use imported image
    linkedinUrl: "https://www.linkedin.com/posts/siddhesh-chaudhari1_codementabr24-ncer-techcommunity-activity-7184953866524737536-7FBw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdFmGMBAyr2QvM4iyqgOP8fqrPNMjyBc98"
  }
];

const HackathonCard = ({ hackathon, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
      className="group relative bg-tertiary rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse flex items-center justify-center">
            <div className="text-gray-400 text-sm">Loading...</div>
          </div>
        )}
        
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
            <div className="text-gray-400 text-sm">Image not found</div>
          </div>
        )}
        
        <img
          src={hackathon.image}
          alt={hackathon.name}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(false);
          }}
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* LinkedIn Link */}
        <motion.a
          href={hackathon.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 w-8 h-8 sm:w-10 sm:h-10 bg-[#0077b5] rounded-full flex items-center justify-center shadow-lg opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-200"
          whileHover={{ rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`LinkedIn post for ${hackathon.name}`}
        >
          <img 
            src={linkedin} 
            alt="LinkedIn" 
            className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
          />
        </motion.a>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <motion.h3 
          className="text-white font-bold text-lg sm:text-xl mb-3 group-hover:text-[#915eff] transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          {hackathon.name}
        </motion.h3>
        
        <motion.p 
          className="text-secondary text-sm sm:text-base leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {hackathon.description}
        </motion.p>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#915eff] rounded-xl transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
};

const Hackathons = () => {
  return (
    <section className="relative z-0">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className={`${styles.sectionSubText} text-center`}>
          Competitive Coding
        </p>
        <h2 className={`${styles.sectionHeadText} text-center mb-10`}>
          Hackathons.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {hackathons.map((hackathon, index) => (
          <HackathonCard 
            key={hackathon.name} 
            hackathon={hackathon} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Hackathons, "hackathons");
