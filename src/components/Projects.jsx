import React from "react";
import arrayDestruct from "../assets/Projects/Hero.jpg";
import installNode from "../assets/Projects/Hero1.jpg";
import navbar from "../assets/Projects/Hero2.jpg";
import reactParallax from "../assets/Projects/Hero3.jpg";
import bananaTranslator from "../assets/Projects/Banana-translator.png";
import reactWeather from "../assets/Projects/Hero5.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: installNode,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactParallax,
    },
    {
      id: 5,
      src: bananaTranslator,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];
  return (
    <div
      name="projects"
      className="bg-slate-50 dark:bg-gradient-to-b from-black to-gray-900 w-full dark:text-white md:h-full"
    >
      <div
        name="projects"
        className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline bg-left-bottom bg-gradient-to-r from-cyan-400 to-blue-500 bg-[length:100%_3px] bg-no-repeat">
            Projects
          </p>
          <p className="py-6 text-gray-900 dark:text-white">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 sm:px-0">
          {projects.map(({ id, src }) => (
            <div
              key={id}
              className="shadow-md shadow-blue-100 dark:shadow-slate-700 rounded-lg p-2"
            >
              <img
                src={src}
                alt=""
                className="rounded-lg duration-300 hover:scale-[1.02]"
              />
              <div className="flex items-center justify-center">
              <a
                  className="w-1/2 px-6 py-2 m-4 duration-300 hover:scale-105 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded"
                  href="https://ajay0175.github.io/Banana-translator/"
                  target="_blank"
                > 
                  <button className="px-3">Demo</button>
                </a>
                <a
                  className="w-1/2 px-6 py-2 m-4 duration-300 hover:scale-105 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded"
                  href="https://github.com/ajay0175/Banana-translator"
                  target="_blank"
                > 
                  <button className="px-3">Code</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
