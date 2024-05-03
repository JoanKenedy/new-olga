import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Servicios from "../components/Servicios";
import Contador from "../components/Contador";
import Agenda from "../components/Agenda";
import Opiniones from "../components/Opiniones";
import Footer from "../components/Footer";
import Flotantes from "../components/Flotantes";
import PromoIndex from "../components/PromoIndex";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Servicios />
      <Contador />
      <PromoIndex />
      <Agenda />

      <Opiniones />
      <Flotantes />
      <Footer />
    </div>
  );
};

export default Home;
