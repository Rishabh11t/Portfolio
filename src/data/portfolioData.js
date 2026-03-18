// src/data/portfolioData.js

const portfolioData = {
  personal: {
    name: "Rishab Tripathi",
    email: "rishabh11tripathi@gmail.com",
    linkedin: "https://linkedin.com/in/rishab-tripathi-366621283",
    github: "https://github.com/Rishabh11t",
    role: "Full Stack Developer | AI Enthusiast",
    tagline: "Building scalable web apps and intelligent systems with modern technologies",
  },

  education: [
    {
      institute: "BIT Durg",
      degree: "BTech Computer Science and Engineering (Data Science)",
      duration: "2022 - 2026",
      score: "CPI: 8.02",
    },
    {
      institute: "KPS International, Naya Raipur",
      degree: "Higher Secondary",
      duration: "2020 - 2021",
      score: "90.2%",
    },
  ],

  experience: [
    {
      company: "VikaasGarh",
      role: "Software Development Intern",
      duration: "05/2025 - 07/2025",
      points: [
        "Developed a responsive web app using MERN stack and Tailwind CSS",
        "Integrated dashboards and feedback tools improving interaction efficiency by 15%",
        "Reduced manual coordination effort by 20% through real time workflows",
      ],
    },
    {
      company: "Sampark Infoways",
      role: "Web Development Intern",
      duration: "05/2024 - 06/2024",
      points: [
        "Built a responsive single page application using React",
        "Improved mobile usability by 45%",
        "Optimized performance reducing load time by 35%",
        "Implemented dynamic UI and real time updates increasing engagement by 25%",
      ],
    },
  ],

  projects: [
    {
      name: "Any Share",
      description: "Secure file sharing platform with unique access code system",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      live: "https://anyshare-mern-frontend.vercel.app/",
      
    },
    {
      name: "Expensia",
      description: "Full stack expense tracker with analytics and CRUD operations",
      tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      live: "https://expensiaaa.vercel.app/",
      
    },
    {
      name: "Skin Disease Detector",
      description: "CNN based model to classify skin diseases from images",
      tech: ["Python", "TensorFlow", "Keras", "Flask"],
      github: "https://github.com/Rishabh11t/Skin-Disease-Detector",
    },
  ],

  skills: {
    languages: ["C", "C++", "Python", "Java", "JavaScript", "HTML", "CSS"],
    frameworks: ["React.js", "Bootstrap", "Node.js", "Express.js", "TensorFlow"],
    databases: ["Postgres", "MongoDB", "Firebase"],
    tools: ["VS Code", "Git", "GitHub", "Google Cloud", "AWS"],
    coursework: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Software Engineering"],
  },

  achievements: [
    {
      title: "National Physics Olympiad Winner",
      description: "Secured first position in CSC National Physics Olympiad",
    },
  ],

  organizations: [
    {
      name: "The Astro Club",
      role: "Secretary",
      description: "Leading technical and social media team and organizing events across the state",
    },
  ],
};

export default portfolioData;