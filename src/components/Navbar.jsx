import React from "react";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
      link: "projects",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-slate-100 dark:bg-black backdrop-filter backdrop-blur-md bg-opacity-50 dark:bg-opacity-50 dark:text-white fixed border-b dark:border-none">
      <div>
        <h1 className="text-3xl font-signature ml-2">AKN</h1>
      </div>
      <div className="ml-auto mr-7 cursor-pointer">
        {theme === "light" ? (
          <FiMoon size={30} className="text-gray-800" onClick={toggleSwitch} />
        ) : (
          <FiSun size={30} onClick={toggleSwitch} />
        )}
      </div>
      <ul className="hidden md:flex">
        {navs.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-medium">
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

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-slate-100 dark:bg-gradient-to-b from-black to-gray-800 text-state-900 dark:text-gray-600">
          {navs.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                offset={-80}
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
