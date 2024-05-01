import React from "react";
import "./promociones.css";

const PromocionesPc = () => {
  const imagesPromo = [
    {
      original: "../src/assets/promo-1.jpg",
    },
    {
      original: "../src/assets/promo-2.jpg",
    },
    {
      original: "../src/assets/promo-3.jpg",
    },
    {
      original: "../src/assets/promo-4.jpg",
    },
    {
      original: "../src/assets/promo-5.jpg",
    },
    {
      original: "../src/assets/promo-6.jpg",
    },
    {
      original: "../src/assets/promo-7.jpg",
    },
  ];
  return (
    <div className="promos">
      <div className="todo-promos">
        {imagesPromo.map((img, index) => (
          <div className="item-todo-promo" index={index}>
            <img src={img.original} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromocionesPc;
