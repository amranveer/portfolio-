// src/components/Projects.jsx (or wherever you store this component)

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// --- Project Data ---
// This array holds the information for each project to be displayed.
const projects = [
  {
    title: "FileDrive",
    description: "A cloud file upload and sharing platform with authentication, real-time updates, and secure sharing options.",
    github: "https://github.com/yourusername/filedrive", // Replace with your actual GitHub link
    live: "https://filedrive.example.com", // Replace with your actual live link
  },
  {
    title: "Portfolio",
    description: "My personal developer portfolio, showcasing my projects, skills, and contact information. Built with modern web technologies.",
    github: "https://github.com/yourusername/portfolio", // Replace with your actual GitHub link
    live: "", // Leave empty if no live link for the portfolio itself
  },
  {
    title: "E-commerce Store",
    description: "A full-stack e-commerce platform featuring product listings, shopping cart functionality, secure payment processing (Stripe), and admin panel.",
    github: "https://github.com/yourusername/ecommerce-store", // Replace with your actual GitHub link
    live: "https://shop.example.com", // Replace with your actual live link
  },
  {
    title: "Task Manager App",
    description: "A collaborative task management application allowing users to create, assign, and track tasks with real-time updates and notifications.",
    github: "https://github.com/yourusername/task-manager", // Replace with your actual GitHub link
    live: "https://tasks.example.com",
  },
  // Add more projects as needed
  // {
  //   title: "Another Project",
  //   description: "Brief description of another cool project.",
  //   github: "https://github.com/yourusername/another-project",
  //   live: "https://another-project.example.com",
  // },
];

// --- Animation Variants ---
// Defines the "hidden" (start) and "visible" (end) states for the animation.
const fadeIn = {
  hidden: { opacity: 0, y: 40 }, // Start invisible and slightly below final position
  visible: {
    opacity: 1, // End fully visible
    y: 0,       // End at original Y position
    transition: {
      duration: 0.7, // Animation duration
      ease: "easeOut", // Easing function for a smooth finish
    },
  },
};

// --- ProjectCard Component ---
// This component handles the rendering and individual animation logic for each project.
// By separating this, each card manages its own `useRef` and `useInView` state independently,
// preventing re-renders of other cards and eliminating flickering.
function ProjectCard({ project }) {
  const ref = useRef(null); // Create a ref to attach to the motion.div
  
  // useInView hook:
  // - `ref`: The element to observe
  // - `once: true`: Ensures the animation plays only ONCE when it enters the viewport.
  // - `amount: 0.3`: Triggers `isInView` when 30% of the element is visible.
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref} // Attach the ref here
      variants={fadeIn} // Apply the predefined animation variants
      initial="hidden" // Set initial state to "hidden"
      animate={isInView ? "visible" : "hidden"} // Animate to "visible" if in view, otherwise "hidden"
      className="glass p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/80 backdrop-blur shadow-sm transition-all flex flex-col h-full"
      // Added `flex flex-col h-full` to ensure consistent card heights,
      // and `flex-grow` on description, `mt-auto` on links for layout flexibility.

      // These styles hint to the browser to use hardware acceleration,
      // which can make animations smoother and prevent flickering.
      style={{
        transform: 'translateZ(0)', // Force 3D rendering context
        WebkitBackfaceVisibility: 'hidden', // Hide backface during transforms (for 3D)
        WebkitPerspective: 1000, // Establish a perspective for 3D transforms
        WebkitTransform: 'translate3d(0,0,0)', // Another way to force 3D rendering
      }}
    >
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      {/* `flex-grow` makes the description take up available space, pushing links down */}
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 flex-grow">
        {project.description}
      </p>
      {/* `mt-auto` pushes these links to the bottom of the card if description varies in length */}
      <div className="flex gap-4 mt-auto">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer" // Essential for security when using target="_blank"
            className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm"
          >
            GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer" // Essential for security when using target="_blank"
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
// This component renders the section title and maps over the projects data
// to display each ProjectCard.
export default function Projects() {
  return (
    <section id="projects" className="py-20 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Some things I've built recently
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            // Use ProjectCard component for each project
            // `key={index}` is used here, but if your projects had unique IDs,
            // `key={project.id}` would be even better for React's reconciliation.
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}