import React from "react";  
import SocialLinks from "./components/SocialLinks";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <SocialLinks />
      <About/>
      <Skills />
      <Projects />
      <Contact />
      < Footer/>
    </>
  );
};

export default App;

