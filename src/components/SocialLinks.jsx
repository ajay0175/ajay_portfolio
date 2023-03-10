import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn{" "}
          <FaLinkedin size={30} className="group-hover:text-blue-600" />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} className="group-hover:text-black" />
        </>
      ),
      href: "https://github.com/ajay0175",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} className="group-hover:text-red-600" />
        </>
      ),
      href: "mailto:ajaynishad9167@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume{" "}
          <BsFillPersonLinesFill
            size={30}
            className="group-hover:text-sky-500"
          />
        </>
      ),
      href: "/Resume.pdf",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "group flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-zinc-800 dark:bg-slate-900" +
              " " +
              style
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
