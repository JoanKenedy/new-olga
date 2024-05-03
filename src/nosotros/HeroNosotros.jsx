import React from "react";
import "./hero-nosotros.css";
import ImgMobil from "../assets/nosotros-mobil.webp";
import ImgPc from "../assets/nosotros.webp";

const HeroNosotros = () => {
  return (
    <div className="heroNosotros">
      <img src={ImgMobil} alt="" className="mobil" />
      <img src={ImgPc} alt="" className="pc-img" />
      <div className="text-title">
        <h2>Conócenos</h2>
        <p>
          Nuestro equipo de médicos altamente capacitados se enfocan en
          brindarte la mejor atención y soluciones médicas de calidad.
        </p>
      </div>
    </div>
  );
};

export default HeroNosotros;
