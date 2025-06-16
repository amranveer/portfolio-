import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const projects = [
  {
    title: "FileDrive",
    description: "A cloud file upload and sharing platform with authentication.",
    tech: "React, Node.js, MongoDB, Tailwind",
    github: "https://github.com/yourusername/filedrive",
    live: "https://drive-project-one.vercel.app",
  },
  {
    title: "Portfolio",
    description: "Personal portfolio to showcase my projects and skills.",
    tech: "React, Tailwind, Framer Motion",
    github: "https://github.com/yourusername/portfolio",
    live: "",
  },
];

const fadeIn = {
  hidden: { opacity: 0},
  visible: (i) => ({
    opacity: 1,
    
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Projects() {
  const [modalProject, setModalProject] = useState(null);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 mb-10">
          Things I've built recently
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, i) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: false, amount: 0.2 });

            return (
              <motion.div
                key={i}
                ref={ref}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeIn}
                className="rounded-xl  p-6 text-left bg-white dark:bg-gray-800 shadow-md "
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}

                  
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {project.description}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{project.tech}</p>
                <div className="flex gap-4 text-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <button
                      onClick={() => setModalProject(project)}
                      className="text-green-600 dark:text-green-400 hover:underline"
                    >
                      Live Preview
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-xl w-full max-w-4xl overflow-hidden relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {modalProject.title} – Live Preview
                </h3>
                <button
                  onClick={() => setModalProject(null)}
                  className="text-xl text-gray-500 hover:text-red-500"
                >
                  &times;
                </button>
              </div>
              <div className="aspect-video">
                <iframe
                  src={modalProject.live}
                  title="Live Preview"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
