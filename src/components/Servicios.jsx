import React, { useState } from "react";
import "./servicios.css";
import foto1 from "../assets/materno.webp";
import foto2 from "../assets/gine.webp";

const Servicios = () => {
  const infoModal = [
    {
      id: 1,
      title: "Obstetricia y Materno Fetal",
      info: "La Medicina Materno Fetal,  es una subespecialidad de la Obstetricia que se centra en el diagnóstico, tratamiento y cuidado de mujeres que tienen un alto riesgo de tener problemas durante el embarazo, ya sea por condición materna o fetal; con un enfoque amplio en el conocimiento de las complicaciones obstétricas y sus efectos sobre la madre y el feto. ",
      url: "/services-obstetricia-materno-fetal",
      textBtn: "Servicios de Obstetricia",
    },
    {
      id: 2,
      title: "Ginecología",
      info: "La ginecología es la rama de la medicina enfocada en el sistema reproductor femenino, dando atención a todas las patologías que se relacionan con el útero, la vagina y los ovarios; también se atienden las hormonas que regulan el funcionamiento y el puerperio.",
      url: "/services-ginecologia",
      textBtn: "Servicios de Ginecología",
    },
  ];

  const [isModal, setIsModal] = useState(false);

  const openModal = (e) => {
    setIsModal(!isModal);

    let evento = e.target.id;
    modalOpen(evento);
  };

  const modalOpen = (evento) => {
    let atraction = document.getElementById("container-atractions-home");
    atraction.innerHTML = "";
    infoModal
      .filter((texto) => texto.id == evento)
      .map((texto) => {
        atraction.innerHTML += `
        <h3 id="title-modal">${texto.title}<h3/>
        <p id="texto-modal">${texto.info}<p/>
        <a
            href=${texto.url}
            target="_blank"
            id="button-contact"
          >
            ${texto.textBtn}
          </a>
        `;
      });
  };

  return (
    <div className="servicios">
      <h2>Atracciones y Lugares de interes</h2>
      <div className="container-servicios">
        <div className="item-servicios">
          <div className="card-img">
            <img src={foto1} alt="" />
          </div>
          <div className="card-body">
            <h2 className="subtitle">Obstetricia y Materno Fetal</h2>
            <p>Diagnóstico fetal de alta precisión ¡Confirmado!</p>
            <button className="btn-mas" id="1" onClick={(e) => openModal(e)}>
              Saber más
            </button>
            <div className="line-hidden"></div>
          </div>
        </div>
        <div className="item-servicios">
          <div className="card-img">
            <img src={foto2} alt="" />
          </div>
          <div className="card-body">
            <h2 className="subtitle">Ginecología</h2>
            <p>Atención ginecológica sin prejuicios ¡Confianza!</p>
            <button className="btn-mas" id="2" onClick={(e) => openModal(e)}>
              Saber más
            </button>
            <div className="line-hidden"></div>
          </div>
        </div>
      </div>
      <div
        className={`modal-atractions ${isModal ? "popup" : ""} `}
        id="modal-atractions"
        onClick={() => setIsModal(!isModal)}
      >
        <div
          className="container-atractions-home"
          id="container-atractions-home"
        ></div>
      </div>
    </div>
  );
};

export default Servicios;
