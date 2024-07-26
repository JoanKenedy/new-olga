import React from "react";
import ModalServices from "../materno/ModalServices";
import HeroServices from "../materno/HeroServices";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MaternoFetal = () => {
  return (
    <div>
      <Navbar />
      <HeroServices />
      <ModalServices />
      <Footer />
    </div>
  );
};

export default MaternoFetal;
