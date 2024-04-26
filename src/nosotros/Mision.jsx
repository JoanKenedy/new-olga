import React from "react";
import "./mision.css";

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
              materno fetal, teniendo a nuestras pacientes como prioridad.
            </p>
          </div>
        </div>
        <div className="item-mision">
          <h2>Nuestros Valores</h2>
          <div className="container-valores">
            <div className="card-valores">
              <div className="card-img-valores">
                <img src="../src/assets/etica.png" alt="" />
              </div>

              <span>Ética</span>
            </div>
            <div className="card-valores">
              <div className="card-img-valores">
                <img src="../src/assets/empatia.png" alt="" />
              </div>

              <span>Empatia</span>
            </div>
            <div className="card-valores">
              <div className="card-img-valores">
                <img src="../src/assets/puntualidad.png" alt="" />
              </div>

              <span>Puntualidad</span>
            </div>
            <div className="card-valores">
              <div className="card-img-valores">
                <img src="../src/assets/respeto.png" alt="" />
              </div>

              <span>Respeto</span>
            </div>
            <div className="card-valores">
              <div className="card-img-valores">
                <img src="../src/assets/confianza.png" alt="" />
              </div>

              <span>Honestidad</span>
            </div>
            <div className="card-valores">
              <div className="card-img-valores">
                <img src="../src/assets/calidad.png" alt="" />
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
