import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={25} className="group text-blue-700" />
        </>
      ),
      href: "https://www.linkedin.com/in/ajaykumarnishad/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={25} className="group text-black" />
        </>
      ),
      href: "https://github.com/ajay0175",
    },
    {
      id: 3,
      child: (
        <>
          <FaInstagram
            size={25}
            className="group bg-gradient-to-br from-purple-800 from-10% via-red-500 via-30% to-yellow-500 to-90% rounded-lg"
          />
        </>
      ),
      href: "https://www.instagram.com/ajaykn017/",
    },
    {
      id: 4,
      child: (
        <>
          <HiOutlineMail size={25} className="group text-red-600" />
        </>
      ),
      href: "mailto:ajaynishad9167@gmail.com",
    },
  ];

  return (
    <div className="hidden fixed lg:flex bottom-5">
      <ul className="flex flex-col gap-4">
        {links.map(({ id, child, href, download }) => (
          <li
            key={id}
            className={
              "group flex justify-between items-center w-[2.7rem] h-[2.7rem] px-[0.6rem] ml-8 rounded-full border-solid border-b-2 dark:border-none hover:animate-bounce duration-300 bg-slate-200 dark:bg-white"
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
