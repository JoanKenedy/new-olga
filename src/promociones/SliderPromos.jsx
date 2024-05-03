import React from "react";
import ImageGallery from "react-image-gallery";
import "./slider-promos.css";
import Promo1 from "../assets/promo-1.jpg";
import Promo2 from "../assets/promo-2.jpg";
import Promo3 from "../assets/promo-3.jpg";
import Promo4 from "../assets/promo-4.jpg";
import Promo5 from "../assets/promo-5.jpg";
import Promo6 from "../assets/promo-6.jpg";
import Promo7 from "../assets/promo-7.jpg";
const SliderPromos = () => {
  const images = [
    {
      original: Promo1,
      thumbnail: Promo1,
    },
    {
      original: Promo2,
      thumbnail: Promo2,
    },
    {
      original: Promo3,
      thumbnail: Promo3,
    },
    {
      original: Promo4,
      thumbnail: Promo4,
    },
    {
      original: Promo5,
      thumbnail: Promo5,
    },
    {
      original: Promo6,
      thumbnail: Promo6,
    },
    {
      original: Promo7,
      thumbnail: Promo7,
    },
  ];

  return (
    <div className="slider-promo">
      <div className="container-promos">
        <ImageGallery
          items={images}
          showPlayButton={false}
          showNav={false}
          showBullets={true}
          autoPlay={true}
          slideInterval={4000}
        />
      </div>
    </div>
  );
};

export default SliderPromos;
