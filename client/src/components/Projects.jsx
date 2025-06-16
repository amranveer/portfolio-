import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const projects = [
  {
    title: "FileDrive",
    description: "A cloud file upload and sharing platform with authentication.",
    github: "https://github.com/yourusername/filedrive",
    live: "https://filedrive.example.com",
  },
  {
    title: "Portfolio",
    description: "My personal developer portfolio built with React and Tailwind.",
    github: "https://github.com/yourusername/portfolio",
    live: "",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Some things I’ve built recently
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: false, amount: 0.3 });

            return (
              <motion.div
                key={index}
                ref={ref}
                variants={fadeIn}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="glass p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/80 backdrop-blur shadow-sm transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 dark:text-green-400 hover:underline text-sm"
                    >
                      Live
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
