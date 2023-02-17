import React from "react";
import html from "../assets/Skills/html1.png";
import css from "../assets/Skills/css1.png";
import javaScript from "../assets/Skills/javascript1.png";
import reactImage from "../assets/Skills/react1.png";
import mongoDB from "../assets/Skills/mongodb1.png";
import gitHib from "../assets/Skills/github1.png";
import tailwind from "../assets/Skills/tailwind1.png";
import firebase from "../assets/Skills/firebase1.png";

const Skills = () => {

  const tech = [
    {
      id:1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-400 dark:shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-400 dark:shadow-blue-500'
    },
    {
      id: 3,
      src: javaScript,
      title: 'JavaScript',
      style: 'shadow-yellow-400 dark:shadow-yellow-500'
    },
    {
      id: 4,
      src: reactImage,
      title: 'ReactJs',
      style: 'shadow-cyan-400 dark:shadow-cyan-500'
    },
    {
      id: 5,
      src: mongoDB,
      title: 'MongoDB',
      style: 'shadow-green-400 dark:shadow-green-500'
    },
    {
      id: 6,
      src: gitHib,
      title: 'GitHub',
      style: 'shadow-slate-400 dark:shadow-gray-500'
    },
    {
      id: 7,
      src: firebase,
      title: 'fireBase',
      style: 'shadow-amber-400 dark: shadaw-amber-500'
    },
    {
      id: 8,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400 dark:shawdow-sky-500 pt-10'
    }
  ]
  return (
    <div>
      <div
        name="skills"
        className="bg-slate-50 dark:bg-gradient-to-b from-gray-800 to-black w-full h-full"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full dark:text-white">
          <div>
            <p className="text-4xl font-bold border-b-[3px] border-gray-500 p-2 inline text-black">Skills</p>
            <p className="py-6 text-gray-900">These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 text-center py-8 sm:px-0">

            {
              tech.map(({id, src, title, style}) => (
                <div key={id} className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}>
              <img src={src} alt=""  className="w-20 mx-auto"/>
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
