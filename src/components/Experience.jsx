import portfolioData from "../data/portfolioData";
import { motion } from "framer-motion";

function Experience() {
  const experience = portfolioData.experience;

  // Styling variables (edit here for design changes)
  const container = "bg-background px-6 py-20";
  const wrapper = "max-w-5xl mx-auto";
  const heading =
    "text-3xl md:text-4xl font-bold text-white mb-12 text-center";

  const timeline = "relative border-l border-gray-800";
  const itemContainer = "mb-10 ml-6";
  const dot =
    "absolute w-3 h-3 bg-primary rounded-full -left-1.5 border border-black";
 const cardStyle =
  "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300";

  const roleStyle = "text-lg font-semibold text-white";
  const companyStyle = "text-primary text-sm mb-1";
  const durationStyle = "text-gray-500 text-xs mb-4";
  const pointStyle = "text-gray-400 text-sm mb-2";

  return (
    <div
      id="experience"
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
          Experience
        </motion.div>

        <div className={timeline}>
          {experience.map(function (item, index) {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={itemContainer}
              >
                {/* Timeline Dot */}
                <div className={dot}></div>

                {/* Card */}
                <div className={cardStyle}>
                  <div className={roleStyle}>
                    {item.role}
                  </div>

                  <div className={companyStyle}>
                    {item.company}
                  </div>

                  <div className={durationStyle}>
                    {item.duration}
                  </div>

                  {/* Points */}
                  {item.points.map(function (point, i) {
                    return (
                      <div
                        key={i}
                        className={pointStyle}
                      >
                        - {point}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;