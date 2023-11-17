import React from "react";
import HeroImg from "../assets/Hero.jpg";
import WavingHand from "../assets/waving-hand.gif";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-slate-50 dark:bg-gradient-to-b from-black via-black to-gray-900 text-white"
    >
      <div className="w-full flex flex-col-reverse items-center justify-center gap-10 md:gap-28 lg:gap-0 h-full lg:flex-row">
        <div className="flex flex-col text-black dark:text-white text-center items-center justify-center gap-4 md:gap-6">
          <div className="flex items-center gap-1">
            <img
              src={WavingHand}
              alt="handGif"
              decoding="async"
              className="h-[30px] w-[30px] md:h-8 md:w-8"
            />
            <h2 className="text-lg md:text-2xl mt-2 md:mt-1.5 font-semibold">Hii,</h2>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold">
            I'm AjayKumar Nishad
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-black dark:text-white">
            I am a Front-End Developer
          </h2>
          <p className="text-md md:text-lg px-4 md:px-16 text-gray-900 dark:text-gray-400">
            I like to work on user-friendly Web applications, and I'm a
            passionate frontend developer working with technologies like HTML,
            Tailwind CSS, ReactJs, etc.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              offset={-75}
              duration={500}
              className="group text-white text-lg md:text-xl font-semibold w-fit px-6 py-3 my-2 flex items-center rounded bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-56 h-56 md:w-80 md:h-80 mt-9 md:mt-2 flex justify-center">
          <img
            src={HeroImg}
            alt="MyProfile"
            height="1000"
            width="1000"
            loading="lazy"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
