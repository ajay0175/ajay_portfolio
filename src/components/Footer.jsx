import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div name="footer" className="bg-slate-300 dark:bg-gray-800">
      <div className="flex flex-col items-center justify-center py-6 dark:text-white">
        <div className="flex xl:hidden items-center gap-3">
          <a
            href="https://www.linkedin.com/in/ajaykumarnishad/"
            target="_blank"
            className="p-3 text-lg"
          >
            <FaLinkedin size={25} className="text-gray-900 dark:text-white" />
          </a>
          <a
            href="https://www.instagram.com/ajaykn017/"
            target="_blank"
            className="p-3 text-lg"
          >
            <FaInstagram size={25} className="text-gray-900 dark:text-white" />
          </a>
          <a
            href="https://github.com/ajay0175"
            target="_blank"
            className="p-3 text-lg"
          >
            <FaGithub size={25} className=" text-gray-900 dark:text-white" />
          </a>
        </div>
        <p className="text-sm mt-2 md:mt-0">
          <p>Made with 
            <span className="animate-pulse"> ❤️ </span> by
            <span className="text-sky-500"> AjayKumar Nishad </span>
            </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
