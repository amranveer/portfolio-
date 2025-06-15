import { motion } from 'framer-motion';

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 transition-colors duration-300"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
        variants={itemVariants}
      >
        Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Ranveer</span>
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-6"
        variants={itemVariants}
      >
        A fullstack web developer passionate about building modern, user-friendly, and fast websites using React, Node, and Tailwind CSS.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-4"
        variants={itemVariants}
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
        >
          View Projects
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="px-6 py-3 bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          Contact Me
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
