import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Servicios from "../components/Servicios";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Servicios />
    </div>
  );
};

export default Home;
