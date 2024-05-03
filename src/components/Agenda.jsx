import React from "react";
import "./agenda.css";
import Doctor from "../assets/doctor.png";
import Chip from "../assets/chip.png";
import Public from "../assets/public-service.png";

const Agenda = () => {
  return (
    <div className="agenda">
      <div className="container-agenda">
        <div className="item-agenda">
          <h2>Expertos</h2>
          <div className="container-list-agenda">
            <div className="list-agenda">
              <div className="body-img">
                <img src={Doctor} alt="" />
              </div>

              <div className="body-list">
                <h2>Especialistas pro</h2>
                <p>
                  Nuestro equipo de médicos altamente capacitados se enfocan en
                  brindarte la mejor atención y soluciones médicas de calidad.
                </p>
              </div>
            </div>
            <div className="list-agenda">
              <div className="body-img">
                <img src={Chip} alt="" />
              </div>

              <div className="body-list">
                <h2>Tecnología pro</h2>
                <p>
                  Utilizamos tecnología de vanguardia para garantizar
                  diagnósticos precisos y tratamientos efectivos.
                </p>
              </div>
            </div>
            <div className="list-agenda">
              <div className="body-img">
                <img src={Public} alt="" />
              </div>

              <div className="body-list">
                <h2>Atención pro</h2>
                <p>
                  Nos comprometemos a brindarte una experiencia médica
                  excepcional, con un enfoque personalizado y cálido.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="item-agenda">
          <h2>¡Agenda tu cita!</h2>
          <p>
            Estás a un click de agendar tu cita con los mejores especialistas
          </p>
          <h3>Prioriza tu salud ¡No esperes más!</h3>

          <a
            href="https://api.whatsapp.com/send/?phone=525564529359"
            target="_blank"
          >
            <i class="fa-solid fa-calendar-days"></i> Agendar cita
          </a>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
