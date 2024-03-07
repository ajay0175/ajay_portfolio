import React from "react";
import contactImg from "../assets/contact.png";

const Contact = () => {
  return (
    <div
      name="contact"
      className="min-h-[80vh] lg:mx-0 bg-slate-50 dark:bg-gradient-to-b from-black to-gray-950 p-4 dark:text-white"
    >
      <div className="flex flex-col justify-center">
        <p className="text-4xl lg:text-6xl pb-4 font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-700">
          Contact Me
        </p>
        <div className="lg:w-5/6 2xl:w-3/4 mt-10 md:mt-10 mx-auto flex justify-between">
          <img
            src={contactImg}
            alt=""
            width="1000"
            height="1000"
            loading="lazy"
            className="hidden md:block w-1/3 h-full object-cover md:pt-6"
          />
          <div className="flex-1 md:ml-32">
            <h3 className="text-2xl font-medium">Let's talk</h3>
            <span className="font-medium flex text-gray-900 dark:text-white">
              <p>Drop a line to get in touch with me</p>
              <p className="animate-bounce pt-2">👇</p>
            </span>
            <form
              action="https://getform.io/f/7903b175-7f71-4681-a17b-b68ec3de16d4"
              method="post"
              className="flex flex-col"
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-black dark:text-white focus:outline-sky-400 dark:outline-none"
              />

              <input
                type="text"
                name="email"
                required
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-black dark:text-white focus:outline-sky-400 dark:outline-none"
              />
              <textarea
                name="message"
                rows="7"
                cols="30"
                type="text"
                required
                placeholder="Enter your message"
                className="p-2 bg-transparent border-2 rounded-md text-black dark:text-white focus:outline-sky-400 dark:outline-none"
              ></textarea>

              <button
                className="text-white text-lg md:text-xl font-medium bg-gradient-to-r from-cyan-500 to-blue-700 px-7 py-3
              my-8 md:my-5 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              >
                Connect🤝
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
