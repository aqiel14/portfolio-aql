import { FunctionComponent } from "react";
import { ISkill } from "../type";
import { motion } from "framer-motion";

const NonBar: FunctionComponent<{ data: ISkill }> = ({
  data: { Icon, name },
}) => {
  return (
    <div className="my-2 bg-gray-300 rounded-full dark:text-white dark:bg-dark-300 dark:bg-black-500">
      <motion.div className="flex items-center px-4 py-1 rounded-full">
        <Icon className="mr-3" /> {name}
      </motion.div>
    </div>
  );
};
export default NonBar;
