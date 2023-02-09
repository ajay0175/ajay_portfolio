import React from "react";  
import SocialLinks from "./components/SocialLinks";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Projects />
      <Skills />
      <Contact />
      
      <SocialLinks />
    </>
  );
};

export default App;

