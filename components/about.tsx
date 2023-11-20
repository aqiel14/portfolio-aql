"use client";
import React from "react";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Software Developer who have a high interest for web app development,
        both Frontend and the Backend aspect. Specializing in React Single Page
        Application development. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>{" "}
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies. I'm also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
};

export default About;
