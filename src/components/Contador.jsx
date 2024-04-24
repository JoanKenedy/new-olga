import React, { useState } from "react";
import "./contador.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Contador = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="contador">
        <div className="container-contador">
          <div className="item-contador">
            <h4 className="numero">
              {counterOn && (
                <CountUp start={0} end={10} duration={5} delay={0} />
              )}
            </h4>
            <p>Años de experiencia</p>
          </div>
          <div className="item-contador">
            <h4 className="numero">
              {counterOn && (
                <CountUp start={0} end={10200} duration={5} delay={0} />
              )}
            </h4>
            <p>Pacientes felices</p>
          </div>
          <div className="item-contador">
            <h4 className="numero">
              {counterOn && (
                <CountUp start={0} end={2450} duration={5} delay={0} />
              )}
            </h4>
            <p>Nacimientos </p>
          </div>
          <div className="item-contador">
            <h4 className="numero">
              {counterOn && (
                <CountUp start={0} end={7500} duration={5} delay={0} />
              )}
            </h4>
            <p>Familias atendidas</p>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Contador;
