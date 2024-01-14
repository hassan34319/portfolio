import React from "react";
import { motion } from "framer-motion";



function Skill({ directionLeft,src,percentage }) {
  return (
    <div className="group relative col-span-1 flex cursor-pointer ">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 1 }}
        className="rounded-full border border-gray-500 p-2 object-cover w-24 h-24 xl:w-32 xl:h-32 filter md:w-28 md:h-28 group-hover:grayscale transition duration-300 ease-in-out"
        src={src}
        alt=""
      />
      <div className="absolute opacity-0 group-hover:opacity-80  transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{percentage}%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill