import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 dark:bg-gradient-to-b from-gray-950 to-black w-full dark:text-white">
      <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-700 ">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-4 dark:text-white">
        Page Not Found
      </h2>
      <p className="text-gray-500 mt-2 text-center max-w-md dark:text-white">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 lg:text-3xl text-white bg-gradient-to-r from-cyan-400 to-blue-700 text-sm font-medium rounded hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
