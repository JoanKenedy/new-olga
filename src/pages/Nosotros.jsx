import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroNosotros from "../nosotros/HeroNosotros";
import About from "../nosotros/About";
import Mision from "../nosotros/Mision";
import Galery from "../nosotros/Galery";
import Flotantes from "../components/Flotantes";

const Nosotros = () => {
  return (
    <div>
      <Navbar />
      <HeroNosotros />
      <About />
      <Mision />
      <Galery />
      <Flotantes />
      <Footer />
    </div>
  );
};

export default Nosotros;
