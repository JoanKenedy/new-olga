import React from "react";
import { Link } from "react-router-dom";
import "./servicios.css";
import Serv1 from "../assets/ginecologia.webp";
import Serv2 from "../assets/obstetricia.webp";
import Serv3 from "../assets/materno.webp";

const Servicios = () => {
  return (
    <div className="servicios">
      <h2>Servicios Pro</h2>
      <div className="container-servicios">
        <div className="item-servicios">
          <div className="card-img">
            <img src={Serv3} alt="" />
          </div>
          <div className="card-body">
            <h2 className="subtitle">Materno Fetal</h2>
            <p>Diagnóstico fetal de alta precisión ¡Confirmado!</p>
            <Link to={"/services"}>Ver más...</Link>
            <div className="line-hidden"></div>
          </div>
        </div>
        <div className="item-servicios">
          <div className="card-img">
            <img src={Serv1} alt="" />
          </div>
          <div className="card-body">
            <h2 className="subtitle">Ginecología</h2>
            <p>Atención ginecológica sin prejuicios ¡Confianza!</p>
            <Link to={"/services"}>Ver más...</Link>
            <div className="line-hidden"></div>
          </div>
        </div>
        <div className="item-servicios">
          <div className="card-img">
            <img src={Serv2} alt="" />
          </div>
          <div className="card-body">
            <h2 className="subtitle">Obstetricia</h2>
            <p>El control de embarazo que merecen tú y bebé</p>
            <Link to={"/services"}>Ver más...</Link>
            <div className="line-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
