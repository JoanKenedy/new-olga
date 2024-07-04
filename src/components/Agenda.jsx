import React from "react";
import "./agenda.css";
import Doctor from "../assets/doctor.png";
import Chip from "../assets/chip.png";
import Public from "../assets/public-service.png";
import Telefono from "../assets/telefono.png";

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
          <h2>Horario semanal</h2>
          <ul class="st-shedule-list">
            <li>
              <div class="st-shedule-left">
                <font>
                  <font>Lunes</font>
                </font>
              </div>
              <div class="st-shedule-right">
                <font>
                  <font>9:00 a.m. a 20:00 p.m.</font>
                </font>
              </div>
            </li>
            <li>
              <div class="st-shedule-left">
                <font>
                  <font>Martes</font>
                </font>
              </div>
              <div class="st-shedule-right">
                <font>
                  <font>9:00 a.m. a 20:00 p.m.</font>
                </font>
              </div>
            </li>
            <li>
              <div class="st-shedule-left">
                <font>
                  <font>Miércoles</font>
                </font>
              </div>
              <div class="st-shedule-right">
                <font>
                  <font>9:00 a.m. a 20:00 p.m.</font>
                </font>
              </div>
            </li>
            <li>
              <div class="st-shedule-left">
                <font>
                  <font>Jueves</font>
                </font>
              </div>
              <div class="st-shedule-right">
                <font>
                  <font>9:00 a.m. a 20:00 p.m.</font>
                </font>
              </div>
            </li>
            <li>
              <div class="st-shedule-left">
                <font>
                  <font>Viernes</font>
                </font>
              </div>
              <div class="st-shedule-right">
                <font>
                  <font>9:00 a.m. a 20:00 p.m.</font>
                </font>
              </div>
            </li>
            <li>
              <div class="st-shedule-left">
                <font>
                  <font>Sábado</font>
                </font>
              </div>
              <div class="st-shedule-right">
                <font>
                  <font>9:00 a.m. a 20:00 p.m.</font>
                </font>
              </div>
            </li>
            <li>
              <div class="st-shedule-left">
                <font>
                  <font>Domingo</font>
                </font>
              </div>
              <div class="st-shedule-right">
                <font>
                  <font>9:00 a.m. a 20:00 p.m.</font>
                </font>
              </div>
            </li>
          </ul>
          <div className="contact-agenda">
            <div className="item-contacto-agenda">
              <img src={Telefono} alt="" />
            </div>
            <div className="item-contacto-agenda">
              <p> 5564529359</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
