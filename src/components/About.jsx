import React from "react";
import AboutMe from "../assets/Hero.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="min-h-[90vh] bg-slate-50 dark:bg-gradient-to-b from-gray-950 to-black dark:text-white"
    >
      <div className="sm:pt-14 lg:pt-7 pb-4 text-center">
        <h2 className="text-4xl lg:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-700">
          About Me
        </h2>
      </div>
      <div className="w-full lg:w-11/12 mt-2 lg:mt-16 lg:mx-24 mx-auto flex flex-col md:gap-4 lg:flex-row items-center justify-between ">
        <div className="p-3 w-2/3 md:w-2/5 lg:w-72 md:mt-2 flex items-center justify-center rounded-2xl mx-auto lg:mx-20 hover:-translate-y-3 transition-transform duration-300 bg-sky-">
          <img
            src={AboutMe}
            alt="Profile"
            width="1000"
            height="1000"
            loading="lazy"
            className="w-full h-auto rounded-2xl object-cover grayscale hover:grayscale-0 transition-all bg-sky-100"
          />
        </div>
        <div className="text-center lg:text-left flex-1 mx-4 mt-4 md:mx-0 md:mt-0 md:p-6">
          <div className="flex flex-col gap-2.5 sm:gap-4 lg:gap-3">
            <p className="text-3xl font-semibold">AjayKumar Nishad</p>
            <p className="text-sky-500 bg-sky-50 w-fit mx-auto lg:mx-0 rounded py-1 px-2 text-sm dark:text-cyan-400 dark:bg-cyan-900/90">
              Front-End Developer
            </p>
            <p className="font-medium text-sm sm:text-lg md:text-base text-left sm:px-5 lg:px-0 lg:pr-28 lg:my-2 text-gray-900 dark:text-gray-400">
              Final-year Computer Engineering undergrad and Junior Front-End
              Developer proficient in HTML, CSS, JavaScript, React, and
              Tailwind. Specializing in crafting responsive websites for optimal
              user experience, I excel in designing dynamic interfaces with
              clean, optimized code. I leverage the latest development tools and
              thrive in collaborative, cross-functional team environments to
              deliver outstanding web applications.
            </p>
            <div className="flex justify-center lg:justify-start md:mt-3">
              <a
                href="https://drive.google.com/file/d/1T0-bcxHkw_d2U88T8nxeGSwuZh5LyYuI/view?usp=sharing"
                target="_blank"
                className="text-white text-lg md:text-xl font-medium w-fit px-10 py-3 my-2 flex items-center rounded bg-gradient-to-r from-cyan-400 to-blue-700 cursor-pointer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default About;
