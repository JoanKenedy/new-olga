import React from "react";
import "./agenda.css";

const Agenda = () => {
  return (
    <div className="agenda">
      <div className="container-agenda">
        <div className="item-agenda">
          <h2>Confianza</h2>
          <div className="list-agenda">
            <img src="./src/assets/doctor.png" alt="" />
            <div className="body-list">
              <h2>Especialistas pro</h2>
              <p>
                Nuestro equipo de médicos altamente capacitados se enfocan en
                brindarte la mejor atención y soluciones médicas de calidad.
              </p>
            </div>
          </div>
          <div className="list-agenda">
            <img src="./src/assets/chip.png" alt="" />
            <div className="body-list">
              <h2>Tecnología pro</h2>
              <p>
                Utilizamos tecnología de vanguardia para garantizar diagnósticos
                precisos y tratamientos efectivos.
              </p>
            </div>
          </div>
          <div className="list-agenda">
            <img src="./src/assets/public-service.png" alt="" />
            <div className="body-list">
              <h2>Atención pro</h2>
              <p>
                Nos comprometemos a brindarte una experiencia médica
                excepcional, con un enfoque personalizado y cálido.
              </p>
            </div>
          </div>
        </div>
        <div className="item-agenda">
          <h2>¡Agenda tu cita!</h2>
          <p>
            Estás a un click de agendar tu cita con los mejores especialistas
          </p>
          <h3>Prioriza tu salud ¡No esperes más!</h3>

          <a href="">
            <i class="fa-solid fa-calendar-days"></i>Agendar cita
          </a>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
