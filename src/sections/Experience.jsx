import portfolioData from "../data/portfolioData";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const experience = portfolioData.experience;

  return (
    <section id="experience">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 tracking-wider  flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <FaBriefcase className="primary" />
          Experience
        </motion.h2>

        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-white/10 -translate-x-1/2"></div>

          {experience.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`mb-16 flex ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >

                {/* Card */}
                <div className="w-full md:w-[45%] glass glass-hover p-6 relative">

                  {/* Dot */}
                  <div className={`absolute top-6 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]
                    ${isLeft ? "-right-6" : "-left-6"}`} />

                  {/* Role */}
                  <h3 className="text-lg font-semibold text-white">
                    {item.role}
                  </h3>

                  {/* Company */}
                  <p className="primary text-sm mb-1">
                    {item.company}
                  </p>

                  {/* Duration */}
                  <p className="text-gray-500 text-xs mb-4">
                    {item.duration}
                  </p>

                  {/* Points */}
                  <ul className="space-y-2 text-sm text-gray-400">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="primary">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;