import React from "react";
import { motion } from "framer-motion";
import { education } from "../../constants";

// Floating animation (runs continuously)
const floatAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Scroll animation (runs only once)
const cardVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[6vw] md:px-[10vw] font-sans bg-skills-gradient clip-path-custom-3 relative"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="h-1 w-32 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A strong academic foundation in technology and problem-solving through my journey.
        </p>
      </div>

      {/* Glassmorphism Floating Cards */}
      <div className="space-y-16">
        {education.map((edu) => (
          <motion.div
            key={edu.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Floating wrapper */}
            <motion.div
              animate={floatAnimation}
              className="relative w-full p-6 sm:p-8 rounded-2xl border border-white/20
                         bg-gray-900/30 backdrop-blur-lg 
                         shadow-[0_0_25px_rgba(130,69,236,0.3)]
                         hover:shadow-[0_0_40px_rgba(130,69,236,0.8)]
                         hover:border-purple-500
                         transition-all duration-500"
            >
              {/* Header with Logo + Info */}
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/90 rounded-full overflow-hidden shadow-md flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="h-full w-full object-contain p-1"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white drop-shadow-md">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm sm:text-md text-gray-300">{edu.school}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Score */}
              <p className="text-white mt-4 font-bold text-sm sm:text-base">
                Score: {edu.grade}
              </p>

              {/* Description */}
              <p className="mt-3 text-gray-300 leading-relaxed text-sm sm:text-base">
                {edu.desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
