import React from "react";
import "./galery.css";
import Galery1 from "../assets/galery-1.webp";
import Galery2 from "../assets/galery-2.webp";
import Galery3 from "../assets/galery-3.webp";
import Galery4 from "../assets/galery-4.webp";
import Galery5 from "../assets/galery-5.webp";
import Galery6 from "../assets/galery-6.webp";
import Galery7 from "../assets/gine.webp";

const Galery = () => {
  const infoModal = [
    {
      id: 1,
      imgSrc: Galery5,
      alt: "Imagen 1",
    },
    {
      id: 2,
      imgSrc: Galery1,
      alt: "Imagen 2",
    },
    {
      id: 3,
      imgSrc: Galery3,
      alt: "Imagen 3",
    },
    {
      id: 4,
      imgSrc: Galery4,
      alt: "Imagen 4",
    },

    {
      id: 5,
      imgSrc: Galery2,
      alt: "Imagen 5",
    },
    {
      id: 6,
      imgSrc: Galery7,
      alt: "Imagen 6",
    },
    {
      id: 7,
      imgSrc: Galery6,
      alt: "Imagen 7",
    },
    {
      id: 8,
      imgSrc: Galery1,
      alt: "Imagen 2",
    },
    {
      id: 9,
      imgSrc: Galery3,
      alt: "Imagen 3",
    },
  ];
  return (
    <div className="galeria">
      <h2>Nuestras Instalaciones</h2>
      <div className="container-galeria">
        {infoModal.map((item, i) => (
          <div className="item-galeria" key={i}>
            <img src={item.imgSrc} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galery;
