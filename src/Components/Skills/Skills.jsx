import React from "react";
import { SkillsInfo } from "../../constants";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }, // faster stagger
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom mt-8"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
          SKILLS
        </h2>
        <div className="w-28 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A strong mix of technical skills and real-world knowledge, developed
          through projects and practical learning.
        </p>
      </div>

      {/* Skills Categories */}
      <motion.div
        className="flex flex-wrap gap-6 justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {SkillsInfo.map((category) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            className="bg-gray-900/80 px-8 py-10 rounded-3xl border border-gray-700 shadow-[0_0_20px_rgba(130,69,236,0.25)] w-full sm:w-[45%] will-change-transform will-change-opacity"
          >
            {/* Category Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center tracking-wide">
              {category.title}
            </h3>

            {/* Skills */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              variants={containerVariants}
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="flex flex-col items-center justify-center gap-2 border border-gray-700 rounded-2xl py-4 px-3 bg-gray-800/40 shadow-md will-change-transform will-change-opacity"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <span className="text-sm sm:text-base text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
