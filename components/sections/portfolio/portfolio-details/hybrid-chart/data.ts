import { uuid } from "@/utils/shortid";
import { ProjectDetails } from "../carepro/data";

export const hybridChartDocs: ProjectDetails = {
  id: uuid(),
  title: "HybridChart — Patient Data Management and Scheduling System",
  duration: "Date range here",
  organization: "Your organization or independent project",
  tagline: "Enhancing healthcare workflows through real-time collaboration.",
  overview:
    "HybridChart is an innovative application designed to help healthcare providers manage patient data, schedules, and treatment plans efficiently. It aims to improve workflow by offering real-time collaboration tools for healthcare staff, seamlessly integrating various aspects of patient care and minimizing manual efforts.",
  keyFeatures: [
    {
      id: uuid(),
      label: "Real-time Scheduling",
      description:
        "Allows healthcare staff to manage and update patient schedules instantly, ensuring that no critical updates are missed.",
    },
    {
      id: uuid(),
      label: "Integrated Treatment Plans",
      description:
        "Seamless integration of patient treatment plans with schedules, ensuring no overlap or conflicts occur during treatment.",
    },
    {
      id: uuid(),
      label: "Collaboration Tools",
      description:
        "Supports real-time collaboration between healthcare staff for better coordination and communication in patient care.",
    },
  ],
  usage: [
    {
      id: uuid(),
      title: "Logging in to HybridChart",
      description:
        "Healthcare providers log in using their credentials to access the platform.",
      image: "/portfolio/hybridchart/usage/login.png",
      alt: "Login Page",
    },
    {
      id: uuid(),
      title: "Manage Patient Schedule",
      description:
        "Users can manage patient schedules in real-time, updating them as needed.",
      image: "/portfolio/hybridchart/usage/manage-schedule.png",
      alt: "Manage Patient Schedule",
    },
    {
      id: uuid(),
      title: "View Treatment Plans",
      description:
        "Users can view and manage patient treatment plans integrated with their schedules.",
      image: "/portfolio/hybridchart/usage/view-treatment-plans.png",
      alt: "View Treatment Plans",
    },
    {
      id: uuid(),
      title: "Collaborate with Team Members",
      description:
        "Healthcare staff can collaborate in real-time on patient care activities.",
      image: "/portfolio/hybridchart/usage/collaborate.png",
      alt: "Collaboration Tools",
    },
  ],
  techStack: [
    "React.js",
    "JavaScript",
    "SCSS",
    "Real-time Database (e.g., Firebase)",
    "WebSockets",
  ],
  challenges: [
    {
      label: "Implementing Real-time Updates",
      link: "https://example.com/your-challenge-blog", // Replace with your actual blog link
      solutions: [
        {
          id: uuid(),
          text: "Utilized WebSockets for real-time data synchronization.",
        },
        {
          id: uuid(),
          text: "Implemented polling mechanisms to support older browsers.",
        },
      ],
    },
  ],
  images: [],
  role: "React Developer",
  responsibilities: [
    {
      id: uuid(),
      label: "Scheduling Integration",
      description:
        "Implemented and integrated the scheduling system with the treatment planning module to enhance efficiency in patient data management.",
    },
    {
      id: uuid(),
      label: "UI Optimization",
      description:
        "Optimized the UI for an improved and intuitive user experience, ensuring ease of navigation for healthcare professionals.",
    },
    {
      id: uuid(),
      label: "Backend Collaboration",
      description:
        "Collaborated closely with the backend team to ensure smooth data flow and synchronization between frontend and backend systems.",
    },
    {
      id: uuid(),
      label: "Real-time Data Updates",
      description:
        "Worked on real-time data updates to keep healthcare providers informed about changes to patient schedules and treatment plans.",
    },
    {
      id: uuid(),
      label: "Code Review Participation",
      description:
        "Participated in code reviews to contribute to improving code quality and performance optimizations.",
    },
  ],
  lessons:
    "Gained insights into building applications with a focus on real-time updates and user-centric design in healthcare.",
  improvements:
    "Significantly enhanced system performance and user experience through various optimizations.",
  blogCaseStudies: {
    title: "HybridChart Blog Case Studies",
    links: [
      {
        id: uuid(),
        label: "Performance Optimization",
        url: "https://example.com/performance-optimization",
      },
      {
        id: uuid(),
        label: "Real-time Features Implementation",
        url: "https://example.com/real-time-features",
      },
    ],
  },
  externalResource: {
    title: "HybridChart External Resources",
    links: [
      {
        id: uuid(),
        label: "Documentation",
        url: "https://example.com/documentation",
      },
      {
        id: uuid(),
        label: "GitHub Repository",
        url: "https://github.com/eaysin-arafat/hybridchart",
      },
    ],
  },
};