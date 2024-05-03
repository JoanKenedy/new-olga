import React from "react";
import "./promo-index.css";
import { Link } from "react-router-dom";

const PromoIndex = () => {
  const imagesIndex = [
    "../src/assets/promo-1.jpg",
    "../src/assets/promo-2.jpg",
    "../src/assets/promo-3.jpg",
  ];
  return (
    <div className="promoIndex">
      <h2>Aprovecha nuestras promociones</h2>
      <div className="container-promoIndex">
        {imagesIndex.map((images, i) => (
          <div className="item-promoIndex" index={i}>
            <img src={images} alt="" />
          </div>
        ))}
      </div>
      <Link to={"/promociones"}>Ver todas las promociones</Link>
    </div>
  );
};

export default PromoIndex;
