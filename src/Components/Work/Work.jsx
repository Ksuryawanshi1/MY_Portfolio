import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  // Lock / unlock background scroll on modal open
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="h-1 w-32 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of meaningful projects showcasing my technical skills,
          creative problem-solving, and practical experience with different
          technologies.
        </p>
      </div>

      {/* Project Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            layout
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 25px rgba(139,92,246,0.4)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={() => handleOpenModal(project)}
            className="border-[0.1px] border-white bg-gray-900 
                       backdrop-blur-md rounded-2xl overflow-hidden 
                       cursor-pointer"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-70 object-cover rounded-xl"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>

              <div className="mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block bg-[#251f38] text-l font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700 sticky top-0 bg-gray-900 z-10">
                <h2 className="text-xl font-semibold text-white">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={handleCloseModal}
                  className="text-purple-500 text-3xl font-bold hover:text-white"
                >
                  &times;
                </button>
              </div>

              {/* Scroll Area */}
              <div className="overflow-y-auto max-h-[78vh] scrollbar-thin">

                {/* Image */}
                <div className="w-full flex justify-center px-5 py-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full max-h-[300px] object-cover rounded-xl shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="px-6 pb-6">
                  <p className="text-gray-400 mb-4 text-base leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-[#251f38] text-purple-400 font-semibold rounded-full px-3 py-1 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-gray-800 hover:bg-white hover:text-black text-gray-300 px-4 py-2 rounded-xl text-center font-semibold"
                    >
                      View Code
                    </a>

                    <a
                      href={selectedProject.webapp || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl text-center font-semibold"
                    >
                      View Site
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
