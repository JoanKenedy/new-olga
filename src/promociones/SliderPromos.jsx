import React from "react";
import ImageGallery from "react-image-gallery";
import "./slider-promos.css";
const SliderPromos = () => {
  const images = [
    {
      original: "../src/assets/promo-1.jpg",
      thumbnail: "../src/assets/promo-1.jpg",
    },
    {
      original: "../src/assets/promo-2.jpg",
      thumbnail: "../src/assets/promo-2.jpg",
    },
    {
      original: "../src/assets/promo-3.jpg",
      thumbnail: "../src/assets/promo-3.jpg",
    },
    {
      original: "../src/assets/promo-4.jpg",
      thumbnail: "../src/assets/promo-4.jpg",
    },
    {
      original: "../src/assets/promo-5.jpg",
      thumbnail: "../src/assets/promo-5.jpg",
    },
    {
      original: "../src/assets/promo-6.jpg",
      thumbnail: "../src/assets/promo-6.jpg",
    },
    {
      original: "../src/assets/promo-7.jpg",
      thumbnail: "../src/assets/promo-7.jpg",
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
