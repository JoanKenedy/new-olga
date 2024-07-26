import React, { useState } from "react";
import "./modal-services.css";
import LazyLoad from "react-lazyload";
import Servicio1 from "../assets/primer-trimestres.jpg";
import Servicio2 from "../assets/materno.webp";
import Servicio3 from "../assets/control-prenatal.webp";
import Servicio4 from "../assets/segundo-trimestre.jpg";
import Servicio5 from "../assets/tercer-trimestre.jpg";
import Servicio6 from "../assets/3d.jpg";
import Servicio7 from "../assets/perfil-biofisico.jpg";
import Servicio8 from "../assets/duo-test.jpg";
import Servicio9 from "../assets/dna-fetal.jpeg";
import Servicio10 from "../assets/biopsia.jpg";
import Servicio11 from "../assets/amnio.jpg";
import Servicio12 from "../assets/parto.jpg";

const ModalServices = () => {
  const infoServicios = [
    {
      id: 1,
      title: "Embarazo de alto riesgo",
      info: "Certeza o la probabilidad de estados patológicos o  condiciones anormales concomitantes con la  gestación y el parto, que aumentan los peligros para  la salud de la madre y del feto. Hay muchos factores que pueden hacer que un embarazo sea de alto riesgo, por ejemplo:",
      punto1: "Edad: Embarazo en adolescentes y mujeres mayores de 35 años.",
      punto2:
        " Estilo de vida: fumar, beber alcohol o usar drogas. Cuando una mujer fuma, bebe alcohol o usa drogas durante el embarazo, el bebé también puede mostrar sus efectos después del nacimiento.",

      punto3:
        " Preeclampsia y eclampsia: Cuando una mujer tiene presión arterial alta (hipertensión) después de la semana 20 del embarazo, se dice que tiene preeclampsia. La eclampsia, que es más grave, puede provocar convulsiones o coma. ",
      punto4:
        "Si necesitas una consulta y diagnosticos precisos , contacta a nuestra especialista en el boton de abajo",
    },
    {
      id: 2,
      title: "Control Prenatal",
      info: "La importancia de que lleves tu control prenatal en orden, incluso si es un embarazo saludable, reside en lograr que evolucione de tal manera que ambos tengan un excelente estado de salud, solo así podrás garantizar que la llegada de tu bebé se dé en las mejores condiciones posibles.Esto siginifica que es un  conjunto de acciones que involucra una serie de visitas de parte de la embarazada a la institución de salud y la respectiva consulta médica para:",
      punto1: " Vigilar la evolución del embarazo.",
      punto2: "Detectar tempranamente riesgos",
      punto3:
        "Prevenir complicaciones y preparar a la paciente para el parto, la maternidad y la crianza, entre otras.",
      punto4:
        "Si necesitas una consulta y diagnosticos precisos , contacta a nuestra especialista en el boton de abajo",
    },
    {
      id: 3,
      title: "Ultrasonido de primer trimestre, genético o de 11-13.6 semanas",
      info: "Un ultrasonido es una prueba que nos permite obtener imágenes de los órganos y estructuras internas del cuerpo gracias a los ultrasonidos, unas ondas sonoras que emite el ecógrafo y que son imperceptibles al oído humano, donde podemos identificar:",
      punto1: "Riesgo para enfermedades genéticas o cromosómicas. ",
      punto2: "Anatomía fetal.",
      punto3: "Cálculo preciso de la edad gestacional.",
      punto4:
        "Si necesitas una consulta y diagnosticos precisos , contacta a nuestra especialista en el boton de abajo",
    },
    {
      id: 4,
      title: "Ultrasonido de segundo trimestre o estructural 18 a 24 semanas",
      info: "En este ultrasonido ya puedes confirmar sexo fetal, ademas de:",
      punto1:
        "La edad gestacional acorde al desarrollo de los órganos y sistemas fetales.",
      punto2: "Detectar anomalías mayores.",
      punto3: "Marcadores para cromosomopatías. ",
      punto4:
        "Si necesitas una consulta y diagnosticos precisos , contacta a nuestra especialista en el boton de abajo.",
    },

    {
      id: 5,
      title: "Ultrasonido de tercer trimestre o crecimiento ",
      info: "Se denomina Ecografía de Crecimiento Fetal y se efectúa habitualmente entre las 28- 32 y las 35- 37 semanas de gestación. Además, de volver a revisar la anatomía fetal, se determina el adecuado crecimiento fetal y así poder realizar una proyección de peso al término del embarazo.",
      punto1: "Evalúa el crecimiento fetal.",
      punto2: "Anomalías de la placentación. ",
      punto3: "Evaluación de líquido amniótico.",
      punto4:
        "Si necesitas una consulta y diagnosticos precisos , contacta a nuestra especialista en el boton de abajo",
    },
    {
      id: 6,
      title: "Ultrasonido 3D y 4D",
      info: "Técnicas de ultrasonido, usadas frecuentemente para proveer imágenes tridimensionales y en tiempo real del feto. Ventajas de Ultrasonidos 3D y 4D ",
      punto1:
        "El Ultrasonio 3D y el Ultrasonido 4D son estudios sencillos y rápidos con un elevado índice de certeza diagnóstica.",
      punto2:
        "El Ultrasonido 3D nos presenta una reconstrucción de la imagen de manera estática a través de la computadora.",
      punto3:
        "El Ultrasonido 4D nos brinda la representación de la imagen en movimiento, en combinación con la reconstrucción volumétrica, es decir, la superficie de las estructuras.",
      punto4:
        "Si necesitas una consulta y diagnosticos precisos , contacta a nuestra especialista en el boton de abajo",
    },
    {
      id: 7,
      title: "Perfil biofísico",
      info: "El perfil biofísico se calcula combinando la evaluación de ultrasonido del tono fetal, los movimientos respiratorios y del cuerpo, con el índice de líquido amniótico y un registro cardiotocográfico. Un perfil biofísico (BPP, por sus siglas en inglés) se hace para ayudar a revisar la salud de su bebé durante su embarazo. Puede hacerse si tiene: ",
      punto1: "Hipertiroidismo.",
      punto2: "Preeclampsia.",
      punto3:
        "Resultados anormales en una cardiotocografía en reposo entre muchas más.",
      punto4:
        "Si necesitas una consulta y diagnosticos precisos , contacta a nuestra especialista en el boton de abajo",
    },
    {
      id: 8,
      title: "Duo test o doble marcador bioquímico sérico",
      info: "Es un estudio que se realiza a partir de una muestra de sangre materna para medir la concentración de dos hormonas placentarias: la fracción beta de la hormona gonadotropina coriónica (β-hCG)y la proteína A asociada al embarazo (PAPP-A).   ",
      punto1:
        "Sirve para determinar el riesgo de que el feto tenga enfermedades de los cromosomas como  el Síndrome de Down",
      punto2: "Debe efectuarse entre la semana 11 y 14 de embarazo.",
      punto3:
        "No, el Duo Test es seguro tanto para ti como para bebé. No hay riesgo de daño al feto durante la prueba",
      punto4:
        "Si necesitas una consulta y diagnosticos precisos , contacta a nuestra especialista en el boton de abajo",
    },
    {
      id: 9,
      title: "DNA Fetal",
      info: "Es una prueba de tamizaje que se realiza en sangre materna a partir de la semana 10 del embarazo y que permite una estimación del riesgo de alteraciones cromosómicas y otro tipo de trastornos relacionados a defectos estructurales. Tiene una sensibilidad del 99.9% para síndrome de Down y también permite una estimación del sexo fetal. ",
      punto1:
        "¿Que se siente?, se coloca una banda elástica alrededor de la parte superior del brazo. Es posible que la sienta apretada. Es posible que no sienta en absoluto la aguja, o que sienta un rápido piquete o pinchazo.",
      punto2:
        "¿Por qué se hace?, La prueba se hace para mujeres que corren un alto riesgo de tener un bebé con una anomalía congénita.",
      punto3:
        "¿Como prepararse?, No tiene que hacer nada para prepararse para esta prueba.",
      punto4:
        "Si necesitas una consulta y diagnosticos precisos , contacta a nuestra especialista en el boton de abajo",
    },
    {
      id: 10,
      title: "Biopsia de vellosidades coriales",
      info: " Es un procedimiento diagnóstico que consiste en la obtención de tejido placentario para estudio de alteraciones cromosómicas y/o genéticas. ",
      punto1:
        "¿Cuándo se hace?, una de las ventajas de la biopsia corial es que puede realizarse entre las semanas 10 y 14 de gestación, obteniéndose así un diagnóstico precoz. ",
      punto2:
        "Resultados de la biopsia corial, con el análisis de las vellosidades coriales de la placenta es posible descartar más de 200 patologías en el feto, entre ellas trastornos genéticos, defectos del tubo neuronal o malformaciones cardiacas.",
      punto3:
        "¿Qué riesgos tiene la biopsia corial?, el principal riesgo de la biopsia de corion es el aborto, aunque hoy en día solamente ocurre en un porcentaje menor al 1%. Sí que es más probable que ocurra un sangrado vaginal después de la biopsia transvaginal, por eso es importante guardar reposo después de la prueba.",
      punto4:
        "Si necesitas una consulta y diagnosticos precisos , contacta a nuestra especialista en el boton de abajo",
    },
    {
      id: 11,
      title: "Amniocentesis",
      info: "Es una prueba que se realiza en una muestra de líquido amniótico para diagnosticar ciertos trastornos genéticos, defectos congénitos y otros problemas de salud en un feto. ",
      punto1:
        "¿Qué ocurre durante una amniocentesis?, la prueba se suele hacer entre las semanas 15 y 20 del embarazo. En ocasiones, se hace antes para comprobar el desarrollo de los pulmones del bebé o diagnosticar ciertas infecciones o enfermedades, como anemia fetal causada por incompatibilidad Rh. ",
      punto2:
        "¿Debo hacer algo para prepararme para la prueba?, si se encuentra en las primeras etapas de su embarazo, es posible que le pidan que no orine antes de la prueba para asegurarse de que tenga la vejiga llena. Esto ayuda a mover el útero a una mejor posición para la prueba. En una etapa posterior del embarazo, es necesario tener la vejiga vacía para la prueba.",
      punto3:
        "¿Tiene algún riesgo esta prueba?, es posible que sienta un leve escozor, presión y/o calambres durante la prueba. Luego, es posible que sienta una leve molestia o sangrado vaginal, o que se escape una pequeña cantidad de líquido amniótico de la vagina.",
      punto4:
        "Si necesitas una consulta y diagnosticos precisos , contacta a nuestra especialista en el boton de abajo",
    },
    {
      id: 12,
      title: "Parto/ Cesárea",
      info: "Cual sea de los dos medios estamos preparados para recibirte . Un parto por cesárea se realiza cuando no es posible o seguro para la madre dar a luz al bebé a través de la vagina. El procedimiento generalmente se hace mientras la mujer está despierta. El cuerpo está anestesiado desde el tórax hasta los pies, usando anestesia epidural o raquídea.",
      punto1:
        "El cirujano hace una incisión a través del abdomen justo por encima del área púbica.",
      punto2: "Se abre el útero (matriz) y el saco amniótico.",
      punto3: " Se saca al bebé a través de esta abertura.",
      punto4:
        "Si necesitas una consulta y diagnosticos precisos , contacta a nuestra especialista en el boton de abajo",
    },
  ];
  const [isModal, setIsModal] = useState(false);

  const openModal = (e) => {
    setIsModal(!isModal);

    let evento = e.target.id;
    modalOpen(evento);
  };

  const modalOpen = (evento) => {
    let atraction = document.getElementById("container-atractions-2");
    atraction.innerHTML = "";
    infoServicios
      .filter((texto) => texto.id == evento)
      .map((texto) => {
        atraction.innerHTML += `
        <h2 id="title-modal-2">${texto.title}<h2/>
        <p id="texto-modal-2">${texto.info}<p/>
        
          <ul id="menu-modal">
        <li>${texto.punto1}</li>
        <li>${texto.punto2}</li>
        <li>${texto.punto3}</li>
         <li>${texto.punto4}</li>
    
        </ul>
        
      
        <a
            href="https://api.whatsapp.com/send/?phone=525564529359"
            target="_blank"
            
            id="btn-modal-2"
          >
            Contacta a nuestra especialista
          </a>
        `;
      });
  };
  return (
    <div className="galery-2">
      <h2>Explora nuestros servicios</h2>
      <div className="container-galery-2">
        <div className="item-galery-2">
          <div className="item-galery-img-2">
            <img src={Servicio3} alt="" />
            <div className="title-services">
              <span>Embarazo de alto riesgo</span>
            </div>
          </div>

          <button className="btn-mas" id="1" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery-2">
          <div className="item-galery-img-2">
            <img src={Servicio2} alt="" />
            <div className="title-services">
              <span>Control Prenatal</span>
            </div>
          </div>

          <button className="btn-mas" id="2" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery-2">
          <div className="item-galery-img-2">
            <img src={Servicio1} alt="" />
            <div className="title-services">
              <span>Ultrasonido de Primer Trimestre</span>
            </div>
          </div>

          <button className="btn-mas" id="3" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery-2">
          <div className="item-galery-img-2">
            <img src={Servicio4} alt="" />
            <div className="title-services">
              <span>Ultrasonido de Segundo Trimestre</span>
            </div>
          </div>

          <button className="btn-mas" id="4" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery-2">
          <div className="item-galery-img-2">
            <img src={Servicio5} alt="" />
            <div className="title-services">
              <span>Ultrasonido de Tecer Trimestre</span>
            </div>
          </div>

          <button className="btn-mas" id="5" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery-2">
          <div className="item-galery-img-2">
            <img src={Servicio6} alt="" />
            <div className="title-services">
              <span>Ultrasonido 3D y 4D</span>
            </div>
          </div>

          <button className="btn-mas" id="6" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery-2">
          <div className="item-galery-img-2">
            <img src={Servicio7} alt="" />
            <div className="title-services">
              <span>Perfil Biofísico</span>
            </div>
          </div>

          <button className="btn-mas" id="7" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery-2">
          <div className="item-galery-img-2">
            <img src={Servicio8} alt="" />
            <div className="title-services">
              <span>Duo Test </span>
            </div>
          </div>

          <button className="btn-mas" id="8" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery-2">
          <div className="item-galery-img-2">
            <img src={Servicio9} alt="" />
            <div className="title-services">
              <span>DNA Fetal</span>
            </div>
          </div>

          <button className="btn-mas" id="9" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery-2">
          <div className="item-galery-img-2">
            <img src={Servicio10} alt="" />
            <div className="title-services">
              <span>Biopsia de vellosidades</span>
            </div>
          </div>

          <button className="btn-mas" id="10" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery-2">
          <div className="item-galery-img-2">
            <img src={Servicio11} alt="" />
            <div className="title-services">
              <span>Amniocentesis</span>
            </div>
          </div>

          <button className="btn-mas" id="11" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
        <div className="item-galery-2">
          <div className="item-galery-img-2">
            <img src={Servicio12} alt="" />
            <div className="title-services">
              <span>Parto y Cesárea</span>
            </div>
          </div>

          <button className="btn-mas" id="12" onClick={(e) => openModal(e)}>
            Ver más
          </button>
        </div>
      </div>
      <div
        className={`modal-atractions ${isModal ? "popup" : ""} `}
        id="modal-atractions"
        onClick={() => setIsModal(!isModal)}
      >
        <div
          className="container-atractions-2"
          id="container-atractions-2"
        ></div>
      </div>
    </div>
  );
};

export default ModalServices;
