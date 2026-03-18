import portfolioData from "../data/portfolioData";
import { motion } from "framer-motion";

function Projects() {
  const projects = portfolioData.projects;

  // Styling variables (edit here for design changes)

  const container = "bg-background px-6 py-20";
  const wrapper = "max-w-6xl mx-auto";

  const heading =
    "text-3xl md:text-4xl font-bold text-white mb-12 text-center";

  const grid = "grid md:grid-cols-2 lg:grid-cols-3 gap-8";

  const cardStyle =
    "bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:scale-105 hover:border-cyan-400/40 transition duration-300 shadow-lg hover:shadow-cyan-500/10";

  const title =
    "text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition";

  const description =
    "text-gray-400 text-sm mb-4";

  const techContainer =
    "flex flex-wrap gap-2 mb-4";

  const techItem =
    "text-xs border border-gray-700 px-2 py-1 rounded text-gray-300";

  const buttonContainer =
    "flex gap-4 mt-4";

  const liveBtn =
    "px-4 py-2 bg-cyan-400 text-black text-sm rounded hover:scale-105 transition glow";

  const codeBtn =
    "px-4 py-2 border border-cyan-400 text-cyan-400 text-sm rounded hover:bg-cyan-400 hover:text-black transition";

  return (
    <div
      id="projects"
      className={container}
    >
      <div className={wrapper}>
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={heading}
        >
          Projects
        </motion.div>

        <div className={grid}>
          {projects.map(function (project, index) {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cardStyle + " group"}
              >
                {/* Project Name */}
                <div className={title}>
                  {project.name}
                </div>

                {/* Description */}
                <div className={description}>
                  {project.description}
                </div>

                {/* Tech Stack */}
                <div className={techContainer}>
                  {project.tech.map(function (techItemValue) {
                    return (
                      <div
                        key={techItemValue}
                        className={techItem}
                      >
                        {techItemValue}
                      </div>
                    );
                  })}
                </div>

                {/* Buttons */}
                <div className={buttonContainer}>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className={liveBtn}
                    >
                      Live
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={codeBtn}
                    >
                      Code
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;