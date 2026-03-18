import portfolioData from "../data/portfolioData";

function Footer() {
  const personal = portfolioData.personal;

  // Styling variables (edit here for design changes)
  const container =
    "bg-black border-t border-gray-800 px-6 py-8";
  const wrapper =
    "max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4";

  const nameStyle = "text-white text-sm";
  const linksContainer = "flex gap-6 text-sm";
  const linkStyle =
    "text-gray-400 hover:text-primary transition";

  const copyright =
    "text-gray-500 text-xs text-center md:text-right";

  return (
    <div className={container}>
      <div className={wrapper}>
        {/* Name */}
        <div className={nameStyle}>
          {personal.name}
        </div>

        {/* Social Links */}
        <div className={linksContainer}>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className={linkStyle}
          >
            GitHub
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className={linkStyle}
          >
            LinkedIn
          </a>

          <a
            href={"mailto:" + personal.email}
            className={linkStyle}
          >
            Email
          </a>
        </div>

        {/* Copyright */}
        <div className={copyright}>
          © 2026 All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;