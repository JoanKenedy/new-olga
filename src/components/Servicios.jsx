import React from "react";
import "./servicios.css";

const Servicios = () => {
  return (
    <div className="servicios">
      <h2>Servicios Pro</h2>
      <div className="container-servicios">
        <div className="item-servicios">
          <div className="card-img">
            <img src="./src/assets/ginecologia.webp" alt="" />
          </div>
          <div className="card-body">
            <h2 className="subtitle">Ginecología</h2>
            <p>Atención ginecológica sin prejuicios ¡Confianza!</p>
            <a href="">Ver más...</a>
            <div className="line-hidden"></div>
          </div>
        </div>
        <div className="item-servicios">
          <div className="card-img">
            <img src="./src/assets/obstetricia.webp" alt="" />
          </div>
          <div className="card-body">
            <h2 className="subtitle">Obstetricia</h2>
            <p>El control de embarazo que merecen tú y bebé</p>
            <a href="">Ver más...</a>
            <div className="line-hidden"></div>
          </div>
        </div>
        <div className="item-servicios">
          <div className="card-img">
            <img src="./src/assets/materno.webp" alt="" />
          </div>
          <div className="card-body">
            <h2 className="subtitle">Materno Fetal</h2>
            <p>Diagnóstico fetal de alta precisión ¡Confirmado!</p>
            <a href="">Ver más...</a>
            <div className="line-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
