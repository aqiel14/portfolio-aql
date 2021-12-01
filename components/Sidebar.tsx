import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsDownload } from "react-icons/bs";
import Image from "next/image";
import { BsMoonFill } from "react-icons/bs";

import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Image
        src="https://i.imgur.com/6WRGcpg.jpg"
        alt="avatar"
        className="mx-auto rounded-full "
        height="256px"
        width="192px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-concretesky-3 dark:text-night-3">Aqiel</span>{" "}
        Ilhamy
      </h3>
      {/* <p className="px-2 py-1 my-3 rounded-full bg-concretesky-2 dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p> */}
      <a
        className="flex items-center justify-center px-5 py-2 my-2 text-base text-black border-2 rounded-full cursor-pointer border-concretesky-3 dark:border-night-3 dark:text-white dark:bg-dark-200 dark:bg-black-500"
        href="/assets/Mohammad Aqiel Ilhamy Resume.pdf"
        download="Mohammad Aqiel Ilhamy Resume.pdf"
      >
        <BsDownload className="w-6 h-6 mr-2" />
        Curriculum Vitae
      </a>
      {/* social Icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-concretesky-3 dark:text-night-3 md:w-full">
        <a href="https://github.com/aqiel14">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/aqiel-ilhamy/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/acil_1612/">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* address */}
      <div className="py-4 my-5 bg-concretesky-2 dark:bg-dark-200 dark:bg-black-500">
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Tangerang Selatan</span>
        </div>
        <p className="my-2">aqiel1414@gmail.com</p>
        <p className="my-2">+62 85703214447</p>
      </div>

      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-concretesky-3 dark:bg-night-3 focus:outline-none dark:shadow-custom-dark"
        onClick={() => window.open("mailto:aqiel1414@gmail.com")}
      >
        <AiOutlineMail className="items-center inline mr-3 text-center" />
        Email
      </button>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-concretesky-3 dark:bg-night-3 focus:outline-none dark:shadow-custom-dark"
        onClick={changeTheme}
      >
        <BsMoonFill className="items-center inline mr-1 text-center" />
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
