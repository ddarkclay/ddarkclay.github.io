import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuAlbum } from "react-icons/lu";
import legalImg from "@/public/top.legal-landing.webp";
import intuitImg from "@/public/intuit-landing.png";
import postOfficeImg from "@/public/postoffice.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer at EffCode Technologies",
    location: "Pune, India",
    description: [
      "• Contributed to the development of feature-rich, responsive web applications by implementing RESTful APIs and creating dynamic, user-friendly interfaces.",
      "• Designed and deployed scalable web solutions using AWS services, optimizing cloud resource utilization to reduce operational costs.",
      "• Gained valuable exposure to UI/UX principles, collaborating with designers to deliver visually appealing and intuitive applications.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "September 2019 - Sept 2020",
  },
  {
    title: "Software Engineer at DIATOZ Software Solutions",
    location: "Bengaluru, India",
    description: [
      "• Led the design and development of a role-based stock management dashboard, incorporating advanced notification management and user authentication modules.",
      "• Implemented a secure authentication and authorization system using Node.js, and JWT, ensuring robust data protection.",
      "• Gained hands-on experience in Agile workflows, and DevOps practices, to enhance development efficiency and durability.",
    ],
    icon: React.createElement(LuAlbum),
    date: "March 2021 - May 2022",
  },
  {
    title: "Senior Solution Engineer at Deqode Solutions",
    location: "Pune, India",
    description: [
      "• Worked in using ReactJS and NextJS with Typescript and Redux for building rich internet applications.",
      "• Contributed to dashboard service with success rate out of 100%, enabling users to monitor and execute command operations on cloud services like AWS, Google Cloud, Azure, etc.",
      "• Expertise in debugging and troubleshooting existing codebase with industry standard solutions.",
      "• Collaborated closely with developers to conceptualize and construct resilient solutions, ensuring alignment with product requirements for functionality, scalability, and performance.",
      "• Demonstrated a strong commitment to writing clean, readable, and maintainable by coding standards and best practices.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - May 2024",
  },
  {
    title: "Senior Full Stack Engineer at top.legal",
    location: "Pune, India",
    description: [
      "• Built and improved features for an AI driven Legal Tech platform using React, Node.js, TypeScript, and GraphQL, making contract negotiations faster and easier for users.",
      "• Optimized performance and data handling by integrating Elasticsearch for better search and data management capabilities.",
      "• Designed and implemented cost-effective serverless solutions leveraging AWS, ensuring high scalability and reliability.",
      "• Guided and supported team members, promoting best practices and contributing to a collaborative work environment.",
      "• Designed and maintained reusable, scalable UI components using Storybook, improving development efficiency.",
    ],
    icon: React.createElement(FaReact),
    date: "May 2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "top.legal - AI-Driven LegalTech Platform",
    about:
      "This AI-enabled SaaS platform transforms how businesses negotiate contracts by combining sales enablement with legal automation. It empowers decision-makers to close better deals faster through intelligent and automated contracting solutions.",
    description: [
      "• Designed and implemented advanced features using React, Node.js, and TypeScript to enhance user experience and scalability.",
      "• Developed reusable UI components with Storybook for seamless integration and consistent design across the platform.",
      "• Built a serverless data pipeline leveraging AWS services like DynamoDB and Lambda, enabling efficient, real-time data processing.",
      "• Integrated Elasticsearch to enhance search functionality and data relationships, improving customer insights and efficiency.",
      "• Actively mentored junior engineers, ensuring quality and fostering a collaborative team environment.",
    ],
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "NodeJS",
      "DynamoDB",
      "GraphQL",
      "Elastic Search",
      "AWS Lambda",
      "Storybook",
      "Git",
      "AI",
    ],
    imageUrl: legalImg,
  },
  {
    title: "Intuit - My Account",
    about:
      "My Account is one of Intuit's tax management software platforms, where end users can manage all purchased products, add-ons, renewals, quote modifications, billing and payments.",
    description: [
      " Designed a Low-Code/No-Code Framework, enabling users to create applications effortlessly through API integration and event binding.",
      "• Created a render-engine-service that dynamically generated UI elements using JSON data, reducing development time for future features.",
      "• Enhanced application scalability and modularity by implementing microfrontend architecture and leveraging cloud-hosted services.",
    ],
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Redux",
      "Mongodb",
      "EC2",
      "Docker",
      "Plugin CLI",
      "Microfrontend",
      "Git",
    ],
    imageUrl: intuitImg,
  },
  {
    title: "Coforge - Post Office",
    about:
      "Post Office is a UK based product which provides 130+ services to the customer. Services like Insurance, Government services, Payments, Taxing, etc.",
    description: [
      " Designed user journeys for financial products (e.g., Travel Insurance, Over 50s Life Insurance) and integrated them with counter terminals.",
      "• Managed a team of 4+ developers, streamlining workflows and ensuring delivery of high-quality solutions within project timelines.",
      "• Contributed to the development of a shared hosting environment, enabling efficient management of services for end-users.",
    ],
    tags: ["React", "Microservices", "Git", "Low Code Framework", "MongoDB", "EC2", "Docker", "Shared hosting"],
    imageUrl: postOfficeImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Cypress",
  "AI",
  "Express",
  "PostgreSQL",
  "Deployment",
  "Project Management",
  "Agile",
  "Testng",
  "Playwright",
  "Automation",
  "AWS",
  "Jest",
  "E2E",
  "Python",
  "Django",
  "Framer Motion",
] as const;
