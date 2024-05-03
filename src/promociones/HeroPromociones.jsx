import React from "react";
import mobil from "../assets/nosotros-mobil.png";
import nosotros from "../assets/nosotros.webp";

const HeroPromociones = () => {
  return (
    <div className="heroNosotros">
      <img src={mobil} alt="" className="mobil" />
      <img src={nosotros} alt="" className="pc-img" />
      <div className="text-title">
        <h2>Promociones</h2>
        <p>
          Checa nuestros descuentos en tratamientos y estudios. <br />Y obten
          calidad de vida para ti y tu bebé.
        </p>
      </div>
    </div>
  );
};

export default HeroPromociones;
