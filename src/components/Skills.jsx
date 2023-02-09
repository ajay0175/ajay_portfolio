import React from "react";
import html from "../assets/Skills/html-5.png";
import css from "../assets/Skills/css.png";
import javaScript from "../assets/Skills/html-5.png";
import reactImage from "../assets/Skills/html-5.png";
import mongoDB from "../assets/Skills/html-5.png";
import gitHib from "../assets/Skills/html-5.png";
import tailwind from "../assets/Skills/html-5.png";

const Skills = () => {

  const tech = [
    {
      id:1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javaScript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: reactImage,
      title: 'ReactJs',
      style: 'shadow-blue-500'
    },
    {
      id: 5,
      src: mongoDB,
      title: 'MongoDB',
      style: 'shadow-green-500'
    },
    {
      id: 6,
      src: gitHib,
      title: 'gitHub',
      style: 'shadow-gray-500'
    },
    {
      id: 7,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-blue-500'
    }
  ]
  return (
    <div>
      <div
        name="skills"
        className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">SKills</p>
            <p className="py-6">These are the Technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px-0">

            {
              tech.map(({id, src, title, style}) => (
                <div key={id} className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}>
              <img src={src} alt=""  className="w-20 mx-auto"/>
              <p className="mt-4">{title}</p>
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
