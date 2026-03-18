import portfolioData from "../data/portfolioData";
import { motion } from "framer-motion";

function Skills() {
  const skills = portfolioData.skills;

  // Styling variables (edit here for design changes)
  const container = "bg-background px-6 py-20";
  const wrapper = "max-w-6xl mx-auto";
  const heading =
    "text-3xl md:text-4xl font-bold text-white mb-12 text-center";

  const grid = "grid md:grid-cols-2 gap-10";
  const card =
    "bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-primary transition";

  const categoryTitle =
    "text-lg font-semibold text-primary mb-4";
  const skillContainer = "flex flex-wrap gap-3";
  const skillItem =
    "px-3 py-1 border border-gray-700 rounded-md text-gray-300 text-sm hover:border-primary hover:text-primary transition";

  return (
    <div
      id="skills"
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
          Skills
        </motion.div>

        <div className={grid}>
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={card}
          >
            <div className={categoryTitle}>
              Languages
            </div>

            <div className={skillContainer}>
              {skills.languages.map(function (item) {
                return (
                  <div
                    key={item}
                    className={skillItem}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={card}
          >
            <div className={categoryTitle}>
              Frameworks and Libraries
            </div>

            <div className={skillContainer}>
              {skills.frameworks.map(function (item) {
                return (
                  <div
                    key={item}
                    className={skillItem}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={card}
          >
            <div className={categoryTitle}>
              Databases
            </div>

            <div className={skillContainer}>
              {skills.databases.map(function (item) {
                return (
                  <div
                    key={item}
                    className={skillItem}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={card}
          >
            <div className={categoryTitle}>
              Tools and Platforms
            </div>

            <div className={skillContainer}>
              {skills.tools.map(function (item) {
                return (
                  <div
                    key={item}
                    className={skillItem}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Coursework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 bg-[#111] border border-gray-800 rounded-xl p-6"
        >
          <div className={categoryTitle}>
            Relevant Coursework
          </div>

          <div className={skillContainer}>
            {skills.coursework.map(function (item) {
              return (
                <div
                  key={item}
                  className={skillItem}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;