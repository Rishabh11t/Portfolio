import portfolioData from "../data/portfolioData";
import { motion } from "framer-motion";

function Contact() {
  const personal = portfolioData.personal;

  // Styling variables (edit here for design changes)
  const container = "bg-background px-6 py-20";
  const wrapper = "max-w-4xl mx-auto text-center";

  const heading =
    "text-3xl md:text-4xl font-bold text-white mb-6";
  const subText =
    "text-gray-400 mb-10 text-sm md:text-base";

  const cardContainer =
    "grid md:grid-cols-3 gap-6";

  const card =
    "bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-primary transition";

  const label = "text-gray-500 text-xs mb-2";
  const value =
    "text-white text-sm break-all";

  const button =
    "mt-10 inline-block px-6 py-3 bg-primary text-black rounded-lg font-semibold hover:opacity-80 transition";

  return (
    <div
      id="contact"
      className={container}
    >
      <div className={wrapper}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={heading}
        >
          Contact Me
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={subText}
        >
          Feel free to reach out for opportunities, collaborations, or just a quick chat
        </motion.div>

        {/* Contact Cards */}
        <div className={cardContainer}>
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={card}
          >
            <div className={label}>
              Email
            </div>
            <div className={value}>
              {personal.email}
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={card}
          >
            <div className={label}>
              Phone
            </div>
            <div className={value}>
              {personal.phone}
            </div>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={card}
          >
            <div className={label}>
              LinkedIn
            </div>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-primary text-sm"
            >
              View Profile
            </a>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.a
          href={"mailto:" + personal.email}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={button}
        >
          Send Email
        </motion.a>
      </div>
    </div>
  );
}

export default Contact;