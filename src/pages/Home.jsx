import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Servicios from "../components/Servicios";
import Contador from "../components/Contador";
import Agenda from "../components/Agenda";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Servicios />
      <Contador />
      <Agenda />
    </div>
  );
};

export default Home;
