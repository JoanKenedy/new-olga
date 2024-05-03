import React from "react";
import "./mision.css";
import Etica from "../assets/etica.png";
import Empatia from "../assets/empatia.png";
import Puntualidad from "../assets/puntualidad.png";
import Respeto from "../assets/respeto.png";
import Confianza from "../assets/confianza.png";
import Calidad from "../assets/calidad.png";

const Mision = () => {
  return (
    <div className="mision">
      <div className="container-mision">
        <div className="item-mision">
          <div className="card-mision">
            <h3>Misión</h3>
            <p>
              Satisfacer las necesidades de salud de nuestras pacientes en todos
              los aspectos en relación al cuidado de la mujer y el
              acompañamiento durante la etapa del embarazo, ofreciendo un
              diagnóstico oportuno, con la finalidad de establecer un protocolo
              de abordaje y tratamiento que garantice una atención de calidad y
              calidez. Cada embarazo y cada parto son únicos. Para asegurar que
              todas las mujeres puedan acceder a una atención de salud materna,
              humana, respetuosa y de alta calidad
            </p>
          </div>
          <div className="card-mision">
            <h3>Visión</h3>
            <p>
              Establecer áreas de excelencia en la especialidad de medicina
              materno fetal, teniendo a nuestras pacientes como prioridad. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              laudantium omnis, necessitatibus error cumque impedit.
            </p>
          </div>
        </div>
        <div className="item-mision">
          <h2>Nuestros Valores</h2>
          <div className="container-valores">
            <div className="card-valores">
              <div className="card-img-valores">
                <img src={Etica} alt="" />
              </div>

              <span>Ética</span>
            </div>
            <div className="card-valores">
              <div className="card-img-valores">
                <img src={Empatia} alt="" />
              </div>

              <span>Empatia</span>
            </div>
            <div className="card-valores">
              <div className="card-img-valores">
                <img src={Puntualidad} alt="" />
              </div>

              <span>Puntualidad</span>
            </div>
            <div className="card-valores">
              <div className="card-img-valores">
                <img src={Respeto} alt="" />
              </div>

              <span>Respeto</span>
            </div>
            <div className="card-valores">
              <div className="card-img-valores">
                <img src={Confianza} alt="" />
              </div>

              <span>Honestidad</span>
            </div>
            <div className="card-valores">
              <div className="card-img-valores">
                <img src={Calidad} alt="" />
              </div>

              <span>Calidad</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mision;
