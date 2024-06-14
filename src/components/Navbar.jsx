import React from "react";
import { useState, useEffect } from "react";
import { CgMenuRight } from "react-icons/cg";
import { BsX } from "react-icons/bs";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navs = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center w-full h-16 px-4 md:px-16  md:h-20 bg-slate-100 dark:bg-black backdrop-filter backdrop-blur-md bg-opacity-50 dark:bg-opacity-50 dark:text-white fixed border-b dark:border-none z-10">
        <div>
          <h1 className="text-3xl font-signature ml-2">AKN</h1>
        </div>
        <div className="ml-auto mr-7 cursor-pointer">
          {theme === "light" ? (
            <FiMoon size={25} onClick={toggleSwitch} />
          ) : (
            <FiSun size={25} onClick={toggleSwitch} />
          )}
        </div>
        {/* Desktop nav */}
        <ul className="hidden sm:flex gap-8">
          {navs.map(({ id, link }) => (
            <li key={id} className="cursor-pointer capitalize font-medium text-lg">
              <Link
                to={link}
                smooth
                offset={-88}
                duration={500}
                className="bg-left-bottom bg-gradient-to-r from-cyan-400 to-blue-500 bg-[length:0%_3px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Nav */}
        <div onClick={() => setNav(!nav)} className="cursor-pointer sm:hidden">
          {<CgMenuRight size={25} />}
        </div>
      </div>

      {/* SideBar */}

      <div
        className={`${
          nav ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-3/4 h-screen bg-slate-100/80 dark:bg-black/90 backdrop-filter backdrop-blur-sm transition-transform transform duration-300 ease-in-out z-10`}
      >
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer flex justify-end px-2 py-4 dark:text-white"
        >
          {<BsX size={40} />}
        </div>

        <ul className="">
          {navs.map(({ id, link }) => (
            <li
              key={id}
              className="p-5 cursor-pointer capitalize font-semibold text-2xl dark:text-white"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                offset={-70}
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
