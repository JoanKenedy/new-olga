import React from "react";
import "./about.css";
import Doctora from "../assets/draOlga.png";
import Especialista from "../assets/doctora.png";
import Tecnologia from "../assets/tecnologia.png";
import Ultrasonido from "../assets/ultrasonido.png";
import Equipo from "../assets/equipo.png";

const About = () => {
  return (
    <div className="about mtop">
      <div className="container-about">
        <div className="item-about">
          <img src={Doctora} alt="" />
          <h1>Dra. Olga Castillo</h1>
          <span>Especialista en Médicina Materno Fetal</span>
        </div>
        <div className="item-about">
          <span className="texto-esp">
            En la Especialidad Materno Fetal contamos con habilidades para dar
            la adecuada atención a pacientes con embarazo de alto riesgo.
          </span>
          <p>
            {" "}
            Además, valoramos las características del feto para mejorar los
            pronósticos maternos y fetales de los embarazos de alto riesgo,
            detectamos factores de riesgo de la paciente para prevenir
            complicaciones durante el embarazo como: preeclampsia, restricción
            en el crecimiento y diabetes gestacional, entre otras. <br /> Te
            brindamos:
          </p>
          <ul>
            <li>
              <div className="container-img-li">
                <img src={Especialista} alt="" />
              </div>
              <div className="container-text-li">
                <p>Especialista Certificada</p>
              </div>
            </li>
            <li>
              <div className="container-img-li">
                <img src={Tecnologia} alt="" />
              </div>
              <div className="container-text-li">
                <p>Equipo de alta tecnología</p>
              </div>
            </li>
            <li>
              <div className="container-img-li">
                <img src={Ultrasonido} alt="" />
              </div>
              <div className="container-text-li">
                <p>Diagnósticos precisos</p>
              </div>
            </li>
            <li>
              <div className="container-img-li">
                <img src={Equipo} alt="" />
              </div>
              <div className="container-text-li">
                <p>Acompañamiento continuo</p>
              </div>
            </li>
          </ul>
          <a
            href="https://api.whatsapp.com/send/?phone=525564529359"
            target="_blank"
            className="btn-cita"
          >
            Agendar cita
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
