import React from "react";
import "./promo-index.css";
import { Link } from "react-router-dom";
import Promo1 from "../assets/promo-1.jpg";
import Promo2 from "../assets/promo-2.jpg";
import Promo3 from "../assets/promo-3.jpg";

const PromoIndex = () => {
  const imagesIndex = [Promo1, Promo2, Promo3];
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
