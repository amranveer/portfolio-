import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Define your project data
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
    live: "", // Leave empty if no live link
  },
  {
    title: "E-commerce Store",
    description: "Full-stack e-commerce platform with Stripe integration.",
    github: "https://github.com/yourusername/ecommerce-store",
    live: "https://shop.example.com",
  },
  {
    title: "Task Manager App",
    description: "A collaborative task management application.",
    github: "https://github.com/yourusername/task-manager",
    live: "",
  },
];

// Define the fade-in animation variants
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

// --- New Component: ProjectCard ---
// This component manages its own in-view state and animation
function ProjectCard({ project }) {
  const ref = useRef(null);
  // useInView hook to detect when the component enters the viewport
  // `once: true` ensures the animation plays only once
  // `amount: 0.3` means 30% of the element must be visible to trigger
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref} // Attach the ref to the motion.div
      variants={fadeIn} // Apply the animation variants
      initial="hidden" // Start from the hidden state
      animate={isInView ? "visible" : "hidden"} // Animate to visible when in view
      className="glass p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/80 backdrop-blur shadow-sm transition-all flex flex-col h-full" // Added flex-col and h-full for consistent card height
      // These styles encourage hardware acceleration for smoother animations
      style={{
        transform: 'translateZ(0)',
        WebkitBackfaceVisibility: 'hidden',
        WebkitPerspective: 1000,
        WebkitTransform: 'translate3d(0,0,0)',
      }}
    >
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 flex-grow"> {/* flex-grow for description */}
        {project.description}
      </p>
      <div className="flex gap-4 mt-auto"> {/* mt-auto pushes links to the bottom */}
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
}

// --- Main Projects Component ---
export default function Projects() {
  return (
    <section id="projects" className="py-20 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Some things I've built recently
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* Map through projects and render ProjectCard for each */}
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}