import CollabSpace from "../assets/Projects/CollabSpace.png";
import Portfolio from "../assets/Projects/Portfolio.png";
import Noteify from "../assets/Projects/Noteify.png";
export const HERO_CONTENT = `Enthusiastic and detail-oriented Software Engineer eager to contribute to impactful projects and drive business
success. Passionate about learning, problem-solving, and building efficient solutions while growing professionally in
a dynamic environment.`;

export const ABOUT_TEXT = `I’m a dedicated and fast-learning full stack developer with 6 months of professional experience in building scalable and user-centric web applications. I’ve worked with technologies like React.js, Redux Toolkit, Django REST Framework, and Tailwind CSS, while also being familiar with backend stacks like Node.js, Express.js, and MongoDB. My curiosity for how software works quickly turned into a passion for developing robust and efficient solutions. I’ve also contributed to real-world projects involving cloud infrastructure (AWS), DevOps practices, and end-to-end application development. I enjoy working in collaborative environments, solving real-world problems, and continuously learning new tools and frameworks to stay ahead in the tech world.`;

export const EXPERIENCES = [
  {
    year: "Oct 2024 - Present",
    role: "Product Engineer",
    company: "Ganit Inc",
    description: `Migrated 19 applications to AWS by Dockerizing them and deploying via EKS on EC2 with multi-environment support (Dev, UAT, Prod). Implemented CI/CD pipelines using GitLab Runner and integrated CloudWatch for centralized logging. Built a resource management system from scratch using React.js, Redux Toolkit, Tailwind CSS, and MSAL authentication, featuring role-based access control for project and resource allocation.`,
    technologies: [
      "Javascript",
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "DjangoRestFramework",
      "AWS Services",
      "Devops",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    year: "May 2023 - August 2023",
    role: "Data Science Intern",
    company: "Celebal Technologies",
    description: `Led a Stock Price Prediction project and collaborated cross-functionally while staying up-to-date with data science and machine learning advancements.`,
    technologies: ["Python", "Data Science", "AI & ML", "Streamlit"],
  },
];

export const CONTACT = {
  address: "Dehradun, Uttarakhand ",
  phoneNo: "+91 7452994963",
  email: "aryanthapa219@gmail.com",
};

export const PROJECTS = [
  {
    title: "CollabSpace",
    image: CollabSpace,
    description:
      "A full-stack team collaboration tool using React.js, Django REST Framework, and JWT authentication with role-based access control (RBAC), dynamic UI components, and full CRUD functionality for workspaces, projects, and tasks.",
    technologies: ["React", "DjangoRestFramework", "Tailwind", "RTKQuery"],
    github: "https://github.com/Aryan-Thapa/Team-Collaboration-Tool",
  },
  {
    title: "Portfolio Website",
    image: Portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "Framermotion"],
    github: "https://github.com/Aryan-Thapa/DEV-Portfolio",
  },
  {
    title: "Noteify",
    image: Noteify,
    description:
      "Noteify is a MERN-stack note-taking app with rich-text editing, AI-powered summaries, autosave, and session persistence. Implemented secure REST APIs with JWT authentication, Redux Toolkit, and a responsive UI using Tailwind CSS and Framer Motion",
    technologies: ["React", "Redux", "Tailwind","Node JS", "Express", "MongoDB"],
    github: "https://github.com/Aryan-Thapa/Noteify-MERN",
  },
];
