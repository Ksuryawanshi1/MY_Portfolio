import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  // Lock / unlock background scroll
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

      {/* Project grid */}
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
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(139,92,246,0.4)" }}
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl h-screen overflow-y-auto scrollbar-thin relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <div className="flex justify-end p-4 sticky top-0 bg-gray-900 z-10">
                <button
                  onClick={handleCloseModal}
                  className="text-purple-500 text-3xl font-bold hover:text-white"
                >
                  &times;
                </button>
              </div>

              <div className="flex flex-col">
                {/* Image */}
                <div className="w-full flex justify-center px-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-[95%] object-contain rounded-xl shadow-2xl"
                  />
                </div>

                {/* Content */}
                <div className="lg:p-8 p-6">
                  <h3 className="lg:text-3xl text-white mb-4 text-md">
                    {selectedProject.title}
                  </h3>

                  <p className="text-gray-400 mb-6 lg:text-base text-xs">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-[#251f38] text-l font-semibold text-purple-500 rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github || "#"}
                      target={selectedProject.github ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!selectedProject.github) {
                          e.preventDefault();
                          alert("Code is not published yet");
                        }
                      }}
                      className="w-1/2 bg-gray-800 hover:bg-white hover:text-black text-gray-400 
                                 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm 
                                 font-semibold text-center"
                    >
                      View Code
                    </a>

                    <a
                      href={selectedProject.webapp || "#"}
                      target={selectedProject.webapp ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!selectedProject.webapp) {
                          e.preventDefault();
                          alert("Project is not hosted yet");
                        }
                      }}
                      className="w-1/2 bg-gray-800 hover:bg-white hover:text-black text-gray-400 
                                 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm 
                                 font-semibold text-center"
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
