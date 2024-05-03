import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroPromociones from "../promociones/HeroPromociones";
import SliderPromos from "../promociones/SliderPromos";
import PromocionesPc from "../promociones/PromocionesPc";
import Opiniones from "../components/Opiniones";
import Flotantes from "../components/Flotantes";

const Promociones = () => {
  return (
    <div>
      <Navbar />
      <HeroPromociones />
      <SliderPromos />
      <PromocionesPc />
      <Opiniones />
      <Flotantes />
      <Footer />
    </div>
  );
};

export default Promociones;
