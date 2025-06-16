import { motion } from "framer-motion";

// Static project data
const projects = [
  {
    title: "FileDrive",
    description: "A cloud file upload and sharing platform with authentication.",
    tech: "React, Node.js, MongoDB, Tailwind",
    github: "https://github.com/yourusername/filedrive",
    live: "https://filedrive.example.com",
  },
  {
    title: "Portfolio",
    description: "My personal developer portfolio built with React and Tailwind.",
    tech: "React, Tailwind, Framer Motion",
    github: "https://github.com/yourusername/portfolio",
    live: "",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0},
  visible: { opacity: 1 , transition: { duration: 0.6 } },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 text-gray-900 dark:text-gray-100 transition-colors"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Some things I’ve built recently
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/80 backdrop-blur shadow-sm hover:shadow-xl transition-all"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 italic">
                {project.tech}
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
          ))}
        </div>
      </div>
    </motion.section>
  );
}
