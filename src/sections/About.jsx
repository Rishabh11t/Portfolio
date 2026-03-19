import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

function About() {
  const sectionStyle =
    "py-20 px-6 bg-background text-white";

  const container =
    "max-w-6xl mx-auto grid md:grid-cols-2 gap-10";

  const headingStyle =
    "text-3xl md:text-4xl font-heading font-bold mb-6";

  const descStyle =
    "text-gray-400 leading-relaxed";

  const cardStyle =
    "bg-card border border-white/10 rounded-xl p-5 backdrop-blur-lg hover:shadow-glow transition";

  const cardTitle =
    "text-primary font-semibold mb-2";

  const cardText =
    "text-gray-400 text-sm";

  return (
    <section id="about" className={sectionStyle}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* TOP LEFT → ABOUT ME */}
        <motion.div
          className={cardStyle}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className={headingStyle}>
            About Me
          </h2>

          <p className={descStyle}>
            {portfolioData.about.description}
          </p>
        </motion.div>

        {/* TOP RIGHT → HIGHLIGHTS */}
        <motion.div
          className={`${cardStyle} flex flex-col justify-center h-full`}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {portfolioData.about.highlights.map(function (item, index) {
              return (
                <div key={index} className={cardStyle}>
                  <h3 className={cardTitle}>
                    {item.title}
                  </h3>

                  <p className={cardText}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* BOTTOM LEFT → EDUCATION */}
        <motion.div
          className={cardStyle}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className={cardTitle}>
            Education
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {portfolioData.about.education.map(function (item, index) {
              return (
                <div key={index} className={cardStyle}>
                  <h3 className={cardTitle}>
                    {item.institute}
                  </h3>

                  <p className={`${cardText} whitespace-pre-line`}>
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* BOTTOM RIGHT → ACHIEVEMENTS & LEADERSHIP */}
        <motion.div
          className={cardStyle}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Achievements */}
            <div className={cardStyle}>
              <h3 className={cardTitle}>
                Achievements
              </h3>

              {portfolioData.about.achievements.map(function (item, index) {
                return (
                  <div key={index} className="mb-3">
                    <p className="text-white text-sm">
                      {item.title}
                    </p>

                    <p className={cardText}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Leadership */}
            <div className={cardStyle}>
              <h3 className={cardTitle}>
                Leadership
              </h3>

              {portfolioData.about.organizations.map(function (item, index) {
                return (
                  <div key={index} className="mb-3">
                    <p className="text-white text-sm">
                      {item.name} - {item.role}
                    </p>

                    <p className={cardText}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;