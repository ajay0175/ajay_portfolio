import React from "react";
import { technologies } from "../assets/Skills/SkillsData";


const Skills = () => {
  return (
    <div>
      <div
        name="skills"
        className="bg-slate-50 dark:bg-gradient-to-b from-black to-gray-950 w-full h-full"
      >
        <div className="max-w-screen-lg mx-auto p-4 md:p-0 flex flex-col justify-center w-full h-full dark:text-white">
          <div className="text-center">
            <p className="text-4xl lg:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-700">Skills</p>
            <p className="font-medium py-3 text-gray-900 dark:text-white">These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-10 text-center py-8 sm:px-0">

            {
              technologies.map(({id, src, title, style}) => (
                <div key={id} className={`shadow-md hover:scale-105 duration-300 py-2 rounded-2xl ${style}`}>
              <img src={src} alt=""  className={`w-20 mx-auto ${id === 6 ? "dark:invert" : ""}`}/>
              <p className="mt-4 text-gray-900 font-medium dark:text-white">{title}</p>
            </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
