import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroNosotros from "../nosotros/HeroNosotros";
import About from "../nosotros/About";
import Mision from "../nosotros/Mision";

const Nosotros = () => {
  return (
    <div>
      <Navbar />
      <HeroNosotros />
      <About />
      <Mision />
      <Footer />
    </div>
  );
};

export default Nosotros;
