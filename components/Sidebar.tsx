import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import Image from "next/image";

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
        <span className="text-green">Aqiel</span> Ilhamy
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
        href="/assets/Mohammad Aqiel Ilhamy Resume.pdf"
        download="Mohammad Aqiel Ilhamy Resume.pdf"
      >
        {/* <GiTie className="w-6 h-6" />  */}
        Download Resume
      </a>
      {/* social Icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a>
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a>
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* address */}
      <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500">
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>BSD City, Tangerang Selatan</span>
        </div>
        <p className="my-2">aqiel1414@gmail.com</p>
        <p className="my-2">085703214447</p>
      </div>

      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:aqiel1414@gmail.com")}
      >
        Email Me
      </button>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={changeTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
