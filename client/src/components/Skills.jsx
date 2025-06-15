import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub,
} from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMongodb } from "react-icons/si";

// Skills data
const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-gray-200 dark:text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
];

// Animation per index
const itemVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,

    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: i * 0.04,
    },
  }),
};

const SkillItem = ({ icon, name, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="glass flex flex-col items-center justify-center p-6 min-h-[140px] rounded-2xl shadow-md transition-transform hover:scale-105"
    >
      <div className="text-4xl mb-2">{icon}</div>
      <p className="text-center text-gray-800 dark:text-gray-100 font-medium text-sm">
        {name}
      </p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 transition-colors">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Technologies I work with regularly
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8">
        {skills.map((skill, index) => (
          <SkillItem key={index} icon={skill.icon} name={skill.name} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
