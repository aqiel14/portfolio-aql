import { achievements, languages, tools } from "../data";
import { motion } from "framer-motion";
import { routeAnimation, slidingUp } from "../animations";
import NonBar from "../components/NonBar";
import { BsCircleFill } from "react-icons/bs";

const resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={slidingUp} initial="initial" animate="animate">
          <h5 className="text-2xl font-bold ">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Information Systems</h5>
            <p className="my-2 text-xl font-bold">
              Telkom University (2017-2021){" "}
              <span className="text-lg font-semibold text-gray-500">
                Bandung, Indonesia
              </span>
            </p>
            <p className="my-2 text-lg font-semibold">
              Bachelor Degree in Information Systems
              {/* <span className="text-base font-thin text-gray-500">
                3.41/4.00
              </span> */}
            </p>
            <p className="my-3 text-lg">
              <span className="text-lg font-bold">Thesis Topic: </span>Building
              a web-based Application For MSMEs (UMKM) with JavaScript MERN
              stack
            </p>
          </div>
        </motion.div>
        <motion.div variants={slidingUp} initial="initial" animate="animate">
          <h5 className="text-2xl font-bold ">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Front End Developer Intern
            </h5>
            <p className="my-2 font-semibold">
              Telkom University Faculty of Industry Engineering
            </p>{" "}
            <span className="my-2 text-lg font-semibold text-gray-500">
              Bandung, Indonesia
            </span>
            <p className="flex items-center px-4 py-1 text-lg">
              <BsCircleFill size={10} className="mr-3 align-middle" />
              Developed Front-End for the project Thesis Selection App
            </p>
            <p className="flex items-center px-4 py-1 text-lg">
              <BsCircleFill size={10} className="mr-3 align-middle" />
              Designed Use-cases and other UML diagrams for projects analysis
            </p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid grid-rows-2 gap-0 md:grid-cols-2">
        <div className="row-span-3">
          <h5 className="my-3 text-2xl font-bold">
            Technical Languages & Frameworks
          </h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <NonBar data={language} key={language.name} />
            ))}
          </div>
        </div>

        <div className="">
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <NonBar data={tool} key={tool.name} />
            ))}
          </div>
        </div>

        <div className="col-start-2 row-span-2">
          <h5 className="my-3 text-2xl font-bold">Achievements</h5>
          <div className="my-2">
            {achievements.map((achievement, i) => (
              <NonBar data={achievement} key={achievement.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
