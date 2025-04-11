import CollabSpace from "../assets/Projects/CollabSpace.jpg";
import Portfolio from "../assets/Projects/Portfolio.jpg";
import Sorting from "../assets/Projects/Sorting.jpg";
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
  },
  {
    title: "Portfolio Website",
    image: Portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "Framermotion"],
  },
  {
    title: "Sorting Visualizer",
    image: Sorting,
    description:
      "An interactive visualization tool for demonstrating sorting algorithms using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
