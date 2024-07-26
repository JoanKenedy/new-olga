import React from "react";
import Foto1 from "../assets/servicio-mobil.webp";
import Foto2 from "../assets/servicios.webp";

const HeroServices = () => {
  return (
    <div className="heroNosotros">
      <img src={Foto1} alt="" className="mobil" />
      <img src={Foto2} alt="" className="pc-img" />
      <div className="text-title">
        <h2>Nuestros Servicios en Ginecología</h2>
        <p>
          Nuestro equipo de médicos altamente capacitados se enfocan en
          brindarte la mejor atención y soluciones médicas de calidad.
        </p>
      </div>
    </div>
  );
};

export default HeroServices;
