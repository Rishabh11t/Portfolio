import portfolioData from "../data/portfolioData";
import { motion } from "framer-motion";

function Projects() {
  const projects = portfolioData.projects;

  return (
    <section id="projects">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 tracking-wider  flex items-center justify-center gap-3"
        >
          Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass glass-hover overflow-hidden group"
            >

              {/* Image */}
              {project.image && (
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              )}

              <div className="p-4">

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 group-hover:primary transition">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-3">
                  {project.description}
                </p>

                {/* Features (NEW 🔥) */}
                {project.features && (
                  <ul className="text-xs text-gray-400 mb-4 space-y-1">
                    {project.features.slice(0, 3).map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                )}

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary text-sm"
                    >
                      Live
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline text-sm"
                    >
                      Code
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;