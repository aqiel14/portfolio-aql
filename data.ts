import { RiComputerLine } from "react-icons/ri";
import { IProject, IService, ISkill } from "./type";

import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "Experience building Interactive SPAs using <b>HTML</b>, <b>CSS</b>, and <b>React</b>  ",
  },
  {
    Icon: FaServer,
    title: "Backend Development",
    about:
      "Experience building servers, and APIs with <b>Node.js</b> and manage databases RDBMS such as <b>MongoDB</b>, <b>MySQL</b>",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "Experience developing APIs with <b>Node API</b> & Query Languages such as <b>GraphQL</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI Designer",
    about:
      "Experience developing user interface designers using <b>Figma</b>  and  <b>Adobe XD</b> ",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React.js",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Next.js",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "TailwindCSS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "PHP",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Laravel",
    level: "80",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Adobe XD",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Adobe Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Adobe Illustrator",
    level: "60",
  },
];

export const achievements: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "TOEFL ITP Score : 607",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Telkom University English Proficiency Test Score : 600",
    level: "85",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "UMKM Management Software",
    description:
      "Built for a thesis project, UMKM Management Software (UMS for short) is a SaaS(Software as a Service) aimed to help local MSMEs(UMKM) expand their businesses without spending a lot of budget for IT Technologies.",
    image_path: "/images/1.png",
    deployed_url: "umkm-pos.netlify.app",
    github_url: "https://github.com/aqiel14/ums-frontend",
    category: ["react", "mongo", "express", "node", "redux"],
    key_techs: ["Mongo", "Express", "React", "Node", "Redux"],
  },
  {
    id: 2,
    name: "GraphQL Blog App",
    image_path: "/images/2.png",
    deployed_url: "graphql-blog-beta.vercel.app",
    github_url: "https://github.com/aqiel14/graphql-blog",
    category: ["react"],
    description:
      "Blog App using GraphQL queries, data managed from a dedicated CMS with GraphCMS, Website design with React and Tailwind CSS. This App is aimed to learn how to work with GraphCMS. GraphCMS is a headless content management system based on GraphQL technology.",
    key_techs: ["React", "Next.js", "GraphQL", "GraphCMS", "TailwindCSS"],
  },

  {
    id: 3,
    name: "Travel Advisor App",
    image_path: "/images/3.png",
    deployed_url: "https://travel-advisor-aql.netlify.app/",
    github_url: "https://github.com/aqiel14/travel-advisor",
    category: ["node", "react"],
    description:
      "Travel Advisor App Recommenders for nearest hotels, restaurants ,and attractions with React, Travel Advisor API, and Google Maps & Places API ",
    key_techs: ["React", "TravelAdvisorAPI", "GoogleAPI"],
  },

  {
    id: 4,
    name: "Business Website App Client: Isye Nursery",
    image_path: "/images/4.png",
    deployed_url: "isye-nursery.netlify.app",
    github_url: "https://github.com/aqiel14/isyenursery",
    category: ["node", "react"],
    description:
      "Business Website App for client company Isye Nursery with React and Next.js",
    key_techs: ["React"],
  },

  {
    id: 5,
    name: "Portofolio App",
    image_path: "/images/5.png",
    deployed_url: "!#",
    github_url: "!#",
    category: ["react"],
    description: "Portofolio App",
    key_techs: [
      "React",
      "Next.js",
      "TailwindCSS",
      "Typescript",
      "Framer Motion",
    ],
  },

  {
    id: 6,
    name: "DiscordChatBot-RemGas",
    image_path: "/images/6.png",
    deployed_url: "SI4-TUGAS#1513",
    github_url: "https://github.com/aqiel14/DiscordJS-RemGas",
    category: ["node"],
    description: "DiscordJS Chatbot homework reminder via discord ",
    key_techs: ["Node", "Discord.js"],
  },
];
