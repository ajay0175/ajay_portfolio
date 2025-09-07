import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SocialLinks from "./components/SocialLinks";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <Router>
      <Navbar />
      <SocialLinks />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
