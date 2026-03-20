import { FaTools } from "react-icons/fa";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaAws
} from "react-icons/fa";



import {
  SiMongodb,
  SiExpress,
  SiTensorflow,
  SiFirebase,
  SiPostgresql,
  SiTailwindcss,
  SiCplusplus,
} from "react-icons/si";

import {
  FaCode,
  FaLayerGroup,
  FaDatabase,
  
} from "react-icons/fa";

const categoryIcons = {
  "Languages": <FaCode className="primary" />,
  "Frameworks & Libraries": <FaLayerGroup className="text-purple-400" />,
  "Databases": <FaDatabase className="text-green-400" />,
  "Tools & Platforms": <FaTools className="text-yellow-400" />,
};

const skillIcons = {
  React: <FaReact />,
  "React.js": <FaReact />,
  Node: <FaNodeJs />,
  "Node.js": <FaNodeJs />,
  Express: <SiExpress />,
  "Express.js": <SiExpress />,
  MongoDB: <SiMongodb />,
  Firebase: <SiFirebase />,
  Postgres: <SiPostgresql />,
  JavaScript: <FaJs />,
  Python: <FaPython />,
  Java: <FaJava />,
  C: <SiCplusplus />,
  "C++": <SiCplusplus />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  AWS: <FaAws />,
  TensorFlow: <SiTensorflow />,
  Tailwind: <SiTailwindcss />,
  "Tailwind CSS": <SiTailwindcss />,
};
import { FaBrain } from "react-icons/fa";

import portfolioData from "../data/portfolioData";
import { motion } from "framer-motion";

function Skills() {
  const skills = portfolioData.skills;

  const categories = [
    { title: "Languages", data: skills.languages },
    { title: "Frameworks & Libraries", data: skills.frameworks },
    { title: "Databases", data: skills.databases },
    { title: "Tools & Platforms", data: skills.tools },
  ];

  return (
    <section id="skills">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 tracking-wider  flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Skills
        </motion.h2>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8">

          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="glass glass-hover p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              
              <h3 className="flex items-center gap-2 text-lg font-semibold primary mb-4">
  <span className="text-xl">
    {categoryIcons[category.title]}
  </span>
  {category.title}
</h3>


              <div className="flex flex-wrap gap-3">
               {category.data.map((item) => (
  <div
    key={item}
    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary hover:primary hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition"
  >
    <span className="text-lg">
      {skillIcons[item] || "⚡"}
    </span>

    <span className="text-sm">
      {item}
    </span>
  </div>
))}
              </div>
            </motion.div>
          ))}
        </div>

      



       

      </div>
    </section>
  );
}

export default Skills;