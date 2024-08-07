import React from "react";
import ModalServices from "../servicios/ModalServices";
import HeroServices from "../servicios/HeroServices";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Ginecologia = () => {
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

export default Ginecologia;
