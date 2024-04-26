import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider-mobil.css";

const Slidermobil = () => {
  var settings = {
    infinite: true,
    speed: 6000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
  return (
    <>
      <div className=" slider-compu">
        <Slider {...settings}>
          <div className="slider">
            <img
              src="./src/assets/slider-pc-1.webp"
              alt=""
              className="slider-img "
            />
            <div className="text-slider">
              <h4>Dra. Olga Castillo, alta especialidad en la mujer.</h4>
            </div>
          </div>
          <div className="slider">
            <img
              src="./src/assets/slider-pc-2.webp"
              alt=""
              className="slider-img "
            />
            <div className="text-slider">
              <h4>Donde nos preocupamos por tu bienestar integral.</h4>
            </div>
          </div>
          <div className="slider">
            <img
              src="./src/assets/slider-pc-3.webp"
              alt=""
              className="slider-img "
            />
            <div className="text-slider">
              <h4>
                Acompañamos cada etapa de tu embarazo con enfoque humanizado y
                atención personalizada.
              </h4>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Slidermobil;
