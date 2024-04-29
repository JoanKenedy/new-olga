import React, { useState } from "react";
import "./modal-services.css";
import LazyLoad from "react-lazyload";
import Servicio1 from "../assets/ginecologia.webp";
import Servicio2 from "../assets/materno.webp";
import Servicio3 from "../assets/control-prenatal.webp";
import Servicio4 from "../assets/ultrasonido.webp";
import Servicio5 from "../assets/preclamcia.webp";
import Servicio6 from "../assets/exploracion.webp";

const ModalServices = () => {
  const infoServicios = [
    {
      id: 1,
      title: "Ginecología y Obstetricia",
      info: "Ven y disfruta del hermoso lago de tequesquitengo con sus 5km de largo por 3km de ancho, tambien aprovecha de todas las actividades que puedes hacer en el lago.",
    },
    {
      id: 2,
      title: "Materno Fetal",
      info: "En la zona existen diversos clubes de playa, con bares, restaurantes, piscinas, áreas para tomar el sol con cómodos camastros y servicio de toallas, si vienes a alguno de ellos, también podrás realizar deportes tanto dentro, como fuera del lago. En estos espacios se aprovecha al máximo el día y cuentan con actividades variadas para que cada quién disfrute de lo que más le gusta sin salir de las instalaciones del club elegido.",
    },
    {
      id: 3,
      title: "Control prenatal",
      info: "Este bello lugar queda en Morelos a 5 minutos de Tequesquitengo y se trata del Parque de jardines florales más grande del mundo. Contiene 9 jardines temáticos, además de, el Jardín ConSentidos, un área educativa y de esparcimiento especialmente dedicada para los pequeños, un Centro de Convenciones, un Centro de Exposiciones, un Centro de Eventos Sociales “Bamboo” (donde se pueden realizar bodas y otros eventos) y el Foro al aire libre: “Spectare”.",
    },
    {
      id: 4,
      title: "Ultrasonidos",
      info: "Si disfrutas de la Historia, la Ruta de Zapata es un interesante recorrido que comienza a sólo 30 minutos de Tequesquitengo con una visita la Casa Museo de Emiliano Zapata en Anenecuilco y recorre los principales sitios por los que pasó Emiliano Zapata. Este recorrido incluye los lugares donde nació, luchó y murió. También verás el Museo de la Revolución ubicado en Tlaltizapán y la Hacienda de Chinameca, en donde Zapata murió asesinado a traición por el Coronel Guajardo en 1919 y Cuautla, en donde descansan los restos de este caudillo.",
    },

    {
      id: 5,
      title: "Preeclampsia y Eclampsia",
      info: "El Zoofari que queda a 15 minutos de Tequesquitengo, cuenta con más de 1200 animales de 150 especies diferentes que se pueden ver, tocar y hasta alimentar en algunos casos. Funciona todo el año y también es una experiencia educativa ya que cada uno de los animales que viven aquí tiene su hábitat recreado. Si estás cerca, no pierdas la oportunidad de hacer el Zoofari.",
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
            href="https://api.whatsapp.com/send?phone=525630220591"
            target="_blank"
            className="button-contact"
          >
            Contacto
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
              <span>Ginecología y Obstetricia</span>
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
              <span>Materno Fetal</span>
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
              <span>Control Prenatal</span>
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
              <span>Ultrasonidos</span>
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
              <span>Preeclampsia y Eclampsia</span>
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
              <span>Exploración mamaria</span>
            </div>
          </div>

          <button className="btn-mas" id="6" onClick={(e) => openModal(e)}>
            Ver más
          </button>
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
