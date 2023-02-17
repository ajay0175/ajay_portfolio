import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-slate-50 dark:bg-gradient-to-b from-black to-gray-800 p-4 dark:text-white"
    >
      <div className="flex flex-col p-3 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline bg-left-bottom bg-gradient-to-r from-cyan-400 to-blue-500 bg-[length:100%_3px] bg-no-repeat">
            Contact
          </p>
          <p className="py-6 text-gray-900 dark:text-white">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/7903b175-7f71-4681-a17b-b68ec3de16d4"
            method="post"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-black dark:text-white focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-black dark:text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              cols="30"
              type="text"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-black dark:text-white focus:outline-none"
            ></textarea>

            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-8 py-3
              my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
