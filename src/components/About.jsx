import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-slate-50 dark:bg-gradient-to-b from-gray-900 to-black dark:text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline bg-left-bottom bg-gradient-to-r from-cyan-400 to-blue-500 bg-[length:100%_3px] bg-no-repeat">About</p>
        </div>
        <p className="text-xl mt-16 text-gray-900 dark:text-white">
        I'm a passionate Frontend web developer and Learning Enthusiastic. I have been Upskilling myself has a software developer. I am good at Data Structure & Algorightm.
        <br></br> Check out my Coding profile.
        <ul>
          <li><a href="" className="text-cyan-500">LeetCode</a></li>
          <li><a href="" className="text-cyan-500">CodeChef</a></li>
          <li><a href="" className="text-cyan-500">Codefrces</a></li>
          <li><a href="" className="text-cyan-500">GeeksforGeeks</a></li>
        </ul>
        </p>
        <br />

        <p className="text-xl text-gray-900 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          provident laboriosam laborum, esse alias culpa, obcaecati illum libero
          quasi possimus quam numquam. Possimus nostrum esse omnis rerum? Iste,
          aut ut?
        </p>
      </div>
    </div>
  );
};

export default About;
