"use client";
import React, { useContext } from "react";
import SectionHeading from "./sectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import useSectionInView from "@/lib/hooks";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@/context/themeContext";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const { theme } = useTheme();

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="null">
        {experiencesData.map((item, i) => (
          <React.Fragment key={i}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              visible={inView}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.company}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.companyDescription}
              </p>
              {item.jobdesc.map((jobdesc, i) => (
                <p className="!text-sm" key={i}>
                  • {jobdesc}
                </p>
              ))}
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
