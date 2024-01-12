import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>A Little About Me</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className="flex text-white justify-between flex-col md:flex-row">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-2xl leading-[30px] "
        >
          Welcome to my portfolio ! I'm Hassan, a student by day and your
          favorite web developer by the night. I believe in the power of
          learning, coding, and conquering. My passion lies in creating
          full-stack websites that add immense value to your business. With a
          simple yet advanced tech stack, I specialize in crafting swift-loading
          websites tailored to your needs. Armed with advanced Next Js
          techniques, the magic of Tailwind, React mastery, and the elegance of
          Typescript, I transform your digital dreams into stunning realities.
          So Let's build something extraordinary together!
        </motion.p>

        <img
          className=" max-w-[30%]"
          src="Hassan1.png"
          alt="Profile Image"
        />
      </div>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What Makes My Websites Unique</p>
        <h2 className={styles.sectionHeadText}>Features</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
