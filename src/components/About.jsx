import portfolioData from "../data/portfolioData";
import { motion } from "framer-motion";

function About() {
  const education = portfolioData.education;
  const achievements = portfolioData.achievements;
  const organizations = portfolioData.organizations;

  // Styling variables (edit here for design changes)
  const container = "bg-background px-6 py-20";
  const wrapper = "max-w-6xl mx-auto";
  const heading =
    "text-3xl md:text-4xl font-bold text-white mb-12 text-center";
  const grid = "grid md:grid-cols-2 gap-10";

const card =
  "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-primary/20 hover:border-primary/40 transition duration-300";

  const title = "text-xl font-semibold text-primary mb-2";
  const text = "text-gray-400 text-sm";
  const subText = "text-gray-500 text-xs mt-1";

  return (
    <div
      id="about"
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
          About Me
        </motion.div>

        <div className={grid}>
          {/* Education */}
          <div>
            <div className={title}>Education</div>

            {education.map(function (item) {
              return (
                <motion.div
                  key={item.institute}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={card}
                >
                  <div className="text-white font-medium">
                    {item.institute}
                  </div>

                  <div className={text}>
                    {item.degree}
                  </div>

                  <div className={subText}>
                    {item.duration} | {item.score}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Achievements + Organizations */}
          <div>
            <div className={title}>Achievements</div>

            {achievements.map(function (item) {
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={card}
                >
                  <div className="text-white font-medium">
                    {item.title}
                  </div>

                  <div className={text}>
                    {item.description}
                  </div>
                </motion.div>
              );
            })}

            <div className="mt-6 text-primary font-semibold">
              Organizations
            </div>

            {organizations.map(function (item) {
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={card}
                >
                  <div className="text-white font-medium">
                    {item.name}
                  </div>

                  <div className={text}>
                    {item.role}
                  </div>

                  <div className={subText}>
                    {item.description}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;