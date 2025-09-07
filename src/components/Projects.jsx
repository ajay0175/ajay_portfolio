import React, { useState } from "react";
import { projectDetails } from "../assets/Projects/projectDetails";

const Projects = () => {
  const [visible, setVisible] = useState(3);
  const [buttonText, setButtonText] = useState("Show more");

  const ShowMoreItems = () => {
    const isShowingAll = visible >= projectDetails.length;

    if (isShowingAll) {
      setVisible(3);
      setButtonText("Show more");
    } else {
      setVisible(projectDetails.length);
      setButtonText("Show less");
    }
  };
  return (
    <div
      name="projects"
      className="bg-slate-50 dark:bg-gradient-to-b from-gray-950 to-black w-full dark:text-white md:h-full"
    >
      <div
        name="projects"
        className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8 text-center">
          <p className="lg:h-16 text-4xl lg:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-700">
            Projects
          </p>
          <p className="font-medium py-3 text-gray-900 dark:text-white">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-9 px-2 sm:px-2 ">
          {projectDetails
            .slice(0, visible)
            .map(({ id, src, name, detail, tech, liveLink, codeLink }) => (
              <div
                key={id}
                className="shadow-lg dark:bg-slate-900/50 rounded-lg p-3 flex flex-col"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  width="1000px"
                  height="1000px"
                  className="rounded-lg duration-300 my-2 hover:scale-105 h-full"
                />
                <div className="flex flex-col my-2 px-1">
                  <h1 className="text-lg font-semibold">{name}</h1>
                  <p className="font-medium">{detail}</p>
                  <div className="font-medium">Tech-Stack: {tech}</div>
                </div>
                <div className="flex text-center text-xl font-medium">
                  <a
                    className="w-1/2 px-5 py-2 m-3 duration-300 hover:scale-105 bg-gradient-to-br from-cyan-400 to-blue-700 text-white rounded-md"
                    href={liveLink}
                    target="_blank"
                  >
                    <button className="">Live</button>
                  </a>
                  <a
                    className="w-1/2 px-5 py-2 m-3 duration-300 hover:scale-105 bg-gradient-to-br from-cyan-400 to-blue-700 text-white rounded-md"
                    href={codeLink}
                    target="_blank"
                  >
                    <button className="">Code</button>
                  </a>
                </div>
              </div>
            ))}
        </div>
        <button
          onClick={ShowMoreItems}
          className="w-fit h-10 mx-auto my-6 px-4 bg-gradient-to-r from-cyan-400 to-blue-700 text-white font-medium text-md md:text-lg rounded animate-bounce"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Projects;
