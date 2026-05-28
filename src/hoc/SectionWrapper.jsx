import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName, sectionNumber) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-10`}
      >
        {sectionNumber && (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.025 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="section-counter"
            aria-hidden="true"
          >
            {sectionNumber}
          </motion.span>
        )}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <div className="relative z-10">
          <Component />
        </div>
      </motion.section>
    );
  };

export default SectionWrapper;
