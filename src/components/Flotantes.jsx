import React from "react";
import "./flotantes.css";

const Flotantes = () => {
  return (
    <div className="flotantes">
      <div className="container-flotantes">
        <div className="item-flotantes">
          <a href="tel:5564529359" target="_blank">
            <img src="/src/assets/llamada.png" alt="" />
          </a>
        </div>
        <div className="item-flotantes">
          <a
            href="https://api.whatsapp.com/send/?phone=525564529359"
            target="_blank"
          >
            <img src="/src/assets/whats.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Flotantes;
