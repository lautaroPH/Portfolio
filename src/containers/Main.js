import React from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import Contact from "./contact/Contact";
import Projects from "./projects/projects";

const Main = () => {
  return (
    <div>
      <Header />
      <Greeting />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Top />
    </div>
  );
};

export default Main;
