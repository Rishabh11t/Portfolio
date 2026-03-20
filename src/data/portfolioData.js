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
about: {
  description:
    "I am a passionate Full Stack Developer and AI enthusiast currently pursuing B-Tech in Computer Science with a specialization in Data Science. I enjoy building scalable web applications and intelligent systems that solve real world problems. With hands on experience in MERN stack and machine learning, I focus on creating efficient, user friendly, and impactful digital solutions.",

  highlights: [
    {
      title: "Full Stack Development",
      description:
        "Experienced in building scalable web applications using MERN stack with modern UI frameworks",
    },
    {
      title: "Machine Learning",
      description:
        "Developed AI based solutions including image classification models using TensorFlow and Keras",
    },
  ],

  education: [
    {
      institute: "BIT Durg",
      detail: "BTech CSE Data Science\n2022 - 2026\nCPI 8.02",
    },
    {
      institute: "KPS International,Naya Raipur",
      detail: "Higher Secondary\n90.2%",
    },
  ],

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

},

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
    id: 1,
    title: "Any Share",
    description:
      "Secure file sharing platform with unique access code system for controlled file access",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    image: "/anyshare.png",
    github: "https://github.com/Rishabh11t", // replace with exact repo
    live: "https://anyshare-mern-frontend.vercel.app/",
    features: [
      "Secure file sharing using unique access codes",
      "Real-time file upload and retrieval system",
      "Responsive UI with modern design",
    ],
  },

  {
    id: 2,
    title: "Expensia",
    description:
      "Full stack expense tracker with analytics dashboard and CRUD functionality",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    image: "/expensia.png",
    github: "https://github.com/Rishabh11t", // replace with exact repo
    live: "https://expensiaaa.vercel.app/",
    features: [
      "Track income and expenses efficiently",
      "Interactive analytics dashboard",
      "Optimized backend APIs for performance",
    ],
  },

  {
    id: 3,
    title: "Skin Disease Detector",
    description:
      "AI-based CNN model to classify skin diseases from images using deep learning",
    tech: ["Python", "TensorFlow", "Keras", "Flask","Matplotlib"],
    image: "/sdd.png",
    github:
      "https://github.com/Rishabh11t/Skin-Disease-Detector",
    live: "https://github.com/Rishabh11t/Skin-Disease-Detector",
    features: [
      "Image classification using CNN model",
      "High accuracy disease prediction",
      "Flask-based deployment for accessibility",
    ],
  },
],

  skills: {
    languages: ["C", "C++", "Python", "Java", "JavaScript", "HTML", "CSS"],
    frameworks: ["React.js", "Bootstrap", "Node.js", "Express.js", "TensorFlow"],
    databases: ["Postgres", "MongoDB", "Firebase"],
    tools: ["VS Code", "Git", "GitHub", "Google Cloud", "AWS"],
    
  },


 
};

export default portfolioData;