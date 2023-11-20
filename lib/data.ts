import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import isyenursery from "@/public/isyenursery.png";
import remgas from "@/public/remgas.png";
import ums from "@/public/ums.png";

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
    title: "Front End Developer Intern",
    company: "Telkom University Faculty of Industry Engineering",
    companyDescription:
      "The Faculty of Industrial Engineering (FRI) is one of the first faculties formed at Telkom University.",
    jobdesc: [
      "Developed Front-End for the project Thesis Selection App",
      "Designed Use-cases and other UML diagrams for project's analysis",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2020 - Aug 2020",
  },
  {
    title: "Graduated University",
    company: "Telkom University",
    companyDescription:
      "Telkom University is a private university located in Bandung Regency, West Java, Indonesia.",
    jobdesc: [
      "Former member of the 2020 Students Association Of Information Systems",
      "Achieved perfect score of 600 on Telkom University English Proficiency Test",
      "Achieved score of 607 on the TOEFL ITP® test",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2017 - Nov 2021",
  },
  {
    title: "Software Developer",
    company: "Commsult AG",
    companyDescription:
      "Commsult AG is a German company specializing in mobile software with SAP and other systems in warehouse, production, service and delivery logistics.",
    jobdesc: [
      "Helped developed the project Akomate, an all-in-one Hotel management software with more than 21 features, namely Accounting, Booking, Auditing and more.",
      "Helped developed the software Ontego Traces (traces.ontego.de), a module within the Ontego Business Suite, a solution for logistics and services systems. Ontego Traces is a fully integrated software solution for planning, tracking & optimizing beverage routes and fully automated delivery time notification for end customers.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2022 - Oct 2023",
  },
] as const;

export const projectsData = [
  {
    title: "UMKM Management Software",
    description:
      "Built for a thesis project, UMKM Management Software is a SaaS(Software as a Service) aimed to help local MSMEs(UMKM) expand their businesses.",
    tags: ["Mongo", "Express", "React", "Node", "Redux"],
    imageUrl: ums,
  },
  {
    title: "Business Website App Client: Isye Nursery",
    description:
      "Business Website App for client company Isye Nursery with React and Next.js",
    tags: ["React", "Next.js", "Material UI"],
    imageUrl: isyenursery,
  },
  {
    title: "remGas",
    description:
      "DiscordJS Chatbot homework reminder via discord to help remote students forgetting their homework deadlines",
    tags: ["Node", "DiscordJs"],
    imageUrl: remgas,
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
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
