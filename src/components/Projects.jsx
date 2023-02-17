import React from "react";
import arrayDestruct from "../assets/Projects/Hero.jpg";
import installNode from "../assets/Projects/Hero1.jpg";
import navbar from "../assets/Projects/Hero2.jpg";
import reactParallax from "../assets/Projects/Hero3.jpg";
import reactSmooth from "../assets/Projects/Hero4.jpg";
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
      src: reactSmooth,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];
  return (
    <div
      name="projects"
      className="bg-slate-50 dark:bg-gradient-to-b from-black to-gray-800 w-full dark:text-white md:h-full"
    >
      <div
        name="projects"
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-[3px] border-gray-500">
            Projects
          </p>
          <p className="py-6 text-gray-900">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0">
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-300 dark:shadaw-gray-600 rounded-lg p-2">
              <img
                src={src}
                alt=""
                className="rounded-lg duration-300 hover:scale-[1.02]"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-2 m-4 duration-300 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-2 m-4 duration-300 hover:scale-105 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
