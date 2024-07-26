import React from "react";
import ModalServices from "../materno/ModalServices";
import HeroServices from "../materno/HeroServices";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MaternoFetal = () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, "1000");
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
