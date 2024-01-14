
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div className="flex flex-col relative text-center md:text-left xl:flex-col max-w-[2000px] xl:px-10 px-4 mx-auto items-center justify-center">
      <h3 className="relative  uppercase tracking-[20px] text-gray-500 text-2xl ">
        Skills
      </h3>

      <h3 className="relative mt-4 uppercase tracking-[3px] text-gray-500 text-sm">Hover over  a skill for currency proficiency</h3>

      <div className=" grid grid-cols-4 gap-5 mt-20" >
        <Skill src="./sanity.png" percentage="100" />
        <Skill src="./next.png" percentage="100" />
        <Skill src="./reactjs.png" percentage="98" />
        <Skill src="./tailwind.png" percentage="96" />
        <Skill src="./redux.png" percentage="94" />
        <Skill src="./typescript.png" percentage="93" />
        <Skill src="./mongodb.png" percentage="84" />
        <Skill src="./nodejs.png" percentage="80" />
        <Skill src="./javascript.png"  percentage="94"/>

      </div>
    </motion.div>
  );
}

export default Skills;