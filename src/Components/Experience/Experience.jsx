import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[8vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
          EXPERIENCE
        </h2>
        <div className="w-28 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of my professional journey, featuring key contributions,
          creative projects, and technical strengths.
        </p>
      </div>

      {/* Experience Cards Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              transitionSpeed={1200}
              gyroscope={true}
              className="p-8 rounded-3xl border border-gray-700 bg-gray-900/80 backdrop-blur-lg shadow-[0_0_30px_4px_rgba(130,69,236,0.25)] hover:shadow-[0_0_50px_8px_rgba(130,69,236,0.5)] transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 bg-white rounded-xl overflow-hidden shadow-lg">
                  <img
                    className="w-full h-full object-cover"
                    src={exp.img}
                    alt={exp.company}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <h4 className="text-md text-gray-300">{exp.company}</h4>
                  <p className="text-sm text-gray-500 mt-1">{exp.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">{exp.desc}</p>

              {/* Skills */}
              <div>
                <h5 className="font-semibold text-white mb-3">Skills</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-[#8245ec]/80 text-gray-100 px-4 py-1 text-xs sm:text-sm rounded-lg border border-gray-600 shadow hover:shadow-[#8245ec]/50 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
