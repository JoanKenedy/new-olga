import React, { useState } from "react";
import "./modal-services.css";
import LazyLoad from "react-lazyload";
import Servicio1 from "../assets/check-up.jpg";
import Servicio2 from "../assets/ginecologia.webp";
import Servicio3 from "../assets/papanicolao.jpg";
import Servicio4 from "../assets/colposcopia.jpg";
import Servicio5 from "../assets/vacuna.jpg";
import Servicio6 from "../assets/galery-1.webp";

const ModalServices = () => {
  const infoServicios = [
    {
      id: 1,
      title: "Check Up",
      info: "La prevención es el mejor tratamiento para cualquier enfermedad, por lo que se recomienda la revisión periódica. Al solicitar un check up ginecológico se realiza una historia clínica detallada para detectar posibles problemas ginecológicos, que puedan interferir con la salud reproductiva y sexual.En definitiva, las revisiones ginecológicas son controles periódicos de gran importancia en la salud de la mujer, ya que protegen su salud sexual y reproductiva. Nunca se es demasiado joven o demasiado mayor para ir al ginecólogo.",
    },
    {
      id: 2,
      title: "Consulta Ginecología",
      info: "En la visita ginecológica se evalúa el estado de salud del aparato genital femenino en su conjunto. Durante la visita se realiza un control tanto de los órganos genitales internos como externos, así como del pecho, para evaluar la presencia de problemas o de auténticas patologías.",
    },
    {
      id: 3,
      title: "Papanicolaou",
      info: "La prueba de Papanicolaou es un examen para ayudar a prevenir y detectar temprano el cáncer de cuello uterino. El cuello uterino es la parte inferior del útero que se abre a la vagina. Durante el procedimiento, un profesional de la salud toma células del cuello uterino y la manda al laboratorio. ¿Para qué se usa? ,la prueba de Papanicolaou busca anomalías en las células cervicales antes de que se conviertan en cáncer. A veces, las células recolectadas también se revisan para detectar VPH, un virus que puede causar cambios en las células que pueden provocar cáncer.",
    },
    {
      id: 4,
      title: "Colposcopia",
      info: "La colposcopía es un procedimiento para examinar detenidamente el cuello del útero, la vagina y la vulva en busca de signos de enfermedades. Durante la colposcopía, el médico utiliza un instrumento especial llamado colposcopio.",
    },

    {
      id: 5,
      title: "Vacuna VPH",
      info: "La vacuna contra el VPH protege de las verrugas genitales y de la mayoría de los casos de cáncer del cuello del útero. Protege contra el cáncer de vagina, vulva, pene o ano causado por el VPH. La vacuna contra el VPH también protege del cáncer de boca, de garganta y de cabeza y cuello causados por este virus. La vacuna proporciona al cuerpo una forma segura para que el sistema inmunitario reconozca mejor algunas cepas del VPH. Esto significa que el cuerpo elimina esas cepas del virus con mayor facilidad si una persona las contrae más tarde.",
    },
    {
      id: 6,
      title: "Exploración mamaria",
      info: "Este rio queda aproximadamente a 25 minutos de Tequesquitengo y sus aguas se encuentran bordeadas por las paredes de un enorme cañón, que tiene muchísima flora y fauna. El río se divide en la parte alta y la baja, cada una con diferentes intensidades de corrientes, empezando en aguas más o menos tranquilas y hasta llegar a los imponentes rápidos. Si te gustan las emociones fuertes esta es otra aventura que puedes disfrutar cuando visites esta zona. ",
    },
  ];
  const [isModal, setIsModal] = useState(false);

  const openModal = (e) => {
    setIsModal(!isModal);

    let evento = e.target.id;
    modalOpen(evento);
  };

  const modalOpen = (evento) => {
    let atraction = document.getElementById("container-atractions");
    atraction.innerHTML = "";
    infoServicios
      .filter((texto) => texto.id == evento)
      .map((texto) => {
        atraction.innerHTML += `
        <h2 id="title-modal">${texto.title}<h2/>
        <p id="texto-modal">${texto.info}<p/>
        <a
            href="https://api.whatsapp.com/send/?phone=525564529359"
            target="_blank"
            className="button-contact"
          >
            Contactar a nuestra especialista
          </a>
        `;
      });
  };
  return (
    <div className="galery">
      <h2>Explora nuestros servicios</h2>
      <div className="container-galery">
        <div className="item-galery">
          <div className="item-galery-img">
            <img src={Servicio1} alt="" />
            <div className="title-services">
              <span>Check Up</span>
            </div>
          </div>

          <button className="btn-mas" id="1" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
          <div className="item-galery-img">
            <img src={Servicio2} alt="" />
            <div className="title-services">
              <span>Consulta Ginecología</span>
            </div>
          </div>

          <button className="btn-mas" id="2" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
          <div className="item-galery-img">
            <img src={Servicio3} alt="" />
            <div className="title-services">
              <span>Papanicolaou</span>
            </div>
          </div>

          <button className="btn-mas" id="3" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
          <div className="item-galery-img">
            <img src={Servicio4} alt="" />
            <div className="title-services">
              <span>Colposcopia</span>
            </div>
          </div>

          <button className="btn-mas" id="4" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
          <div className="item-galery-img">
            <img src={Servicio5} alt="" />
            <div className="title-services">
              <span>Vacuna contra el VPH</span>
            </div>
          </div>

          <button className="btn-mas" id="5" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery">
          <div className="item-galery-img">
            <img src={Servicio6} alt="" />
            <div className="title-services">
              <span>Para más información comunicate con nosotros</span>
            </div>
          </div>
          <a
            href="https://api.whatsapp.com/send/?phone=525564529359"
            target="_blank"
            className="btn-datos"
          >
            Contacto
          </a>
        </div>
      </div>
      <div
        className={`modal-atractions ${isModal ? "popup" : ""} `}
        id="modal-atractions"
        onClick={() => setIsModal(!isModal)}
      >
        <div className="container-atractions" id="container-atractions"></div>
      </div>
    </div>
  );
};

export default ModalServices;
