import React from "react";
import "./hero-nosotros.css";

const HeroNosotros = () => {
  return (
    <div className="heroNosotros">
      <img src="./src/assets/nosotros-mobil.png" alt="" className="mobil" />
      <img src="./src/assets/nosotros.png" alt="" className="pc-img" />
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
