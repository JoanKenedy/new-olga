import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Servicios from "../components/Servicios";
import Contador from "../components/Contador";
import Agenda from "../components/Agenda";
import Opiniones from "../components/Opiniones";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Servicios />
      <Contador />
      <Agenda />
      <Opiniones />
      <Footer />
    </div>
  );
};

export default Home;
