import React from "react";
import HeroImg from "../assets/Hero.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-slate-50 dark:bg-gradient-to-b from-black via-black to-gray-900 text-white">
        
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full mr-5">
                <h2 className="text-4xl sm:text-7xl font-bold text-black dark:text-white">
                    I'm a Frontend Web Developer
                </h2>
                <p className="text-gray-900 dark:text-gray-500 py-4 max-w-md">
                    I like to work on Web application using technologies like ReactJs, Tailwind, Firebase, etc.
                </p>

                <div>
                    <Link to="projects" smooth offset={-75} duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer">
                        Projects
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImg} alt="MyProfile" className="rounded-2xl m-auto w-2/3 md:w-2/3"/>
            </div>
        </div>
    </div>
  );
};

export default Home;
