import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

// Animation variants
const fadeVariant = {
  hidden: { opacity: 0},
  visible: {
    opacity: 1,
   
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

// Reusable card component
const ProjectCard = ({ title, description, tech, github, live, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });



  return (
    <motion.div
      ref={ref}
      variants={fadeVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ transitionDelay: `${delay}s` }}
      className="glass p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/80 backdrop-blur shadow-sm hover:shadow-xl transition-all"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, i) => (
          <span
            key={i}
            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
          >
            GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
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
};

// Main Projects section
export default function Projects() {
  return (
    <section id="projects" className="py-20 transition-colors">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Some things I’ve built recently
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-6 md:px-8">
        <ProjectCard
          title="FileDrive"
          description="A cloud file upload and sharing platform with authentication."
          tech={["React", "Node.js", "MongoDB", "Tailwind"]}
          github="https://github.com/yourusername/filedrive"
          live="https://filedrive.example.com"
          delay={0.1}
        />
        <ProjectCard
          title="Portfolio"
          description="My personal developer portfolio built with React and Tailwind."
          tech={["React", "Tailwind", "Framer Motion"]}
          github="https://github.com/yourusername/portfolio"
          live=""
          delay={0.2}
        />
      </div>
    </section>
  );
}
