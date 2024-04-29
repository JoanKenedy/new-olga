import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ModalServices from "../servicios/ModalServices";
import HeroServices from "../servicios/HeroServices";
import Opiniones from "../components/Opiniones";
import Flotantes from "../components/Flotantes";

const Services = () => {
  return (
    <div>
      <Navbar />
      <HeroServices />
      <ModalServices />
      <Opiniones />
      <Flotantes />
      <Footer />
    </div>
  );
};

export default Services;
