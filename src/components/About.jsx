import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about mtop">
      <div className="container-about">
        <div className="item-about">
          <img src="./src/assets/olga.webp" alt="" />
          <h1>Dra. Olga Castillo</h1>
          <span>Especializada en Ginecología y Obstetricia.</span>
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
              <i class="fa-solid fa-circle-stop"></i>
              <p>Equipo de alta tecnología</p>
            </li>
            <li>
              <i class="fa-solid fa-circle-stop"></i>
              <p>Médicos Certificados</p>
            </li>
            <li>
              <i class="fa-solid fa-circle-stop"></i>
              <p>Diagnósticos precisos</p>
            </li>
            <li>
              <i class="fa-solid fa-circle-stop"></i>
              <p>Acompañamiento continuo</p>
            </li>
            <li>
              <i class="fa-solid fa-circle-stop"></i>
              <p>Atención personalizada e integral</p>
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
