import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./opiniones.css";

const Opiniones = () => {
  var settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <>
      <div className="opiniones">
        <h2>Testimonios</h2>
        <Slider {...settings}>
          <div className="slider-opiniones">
            <div className="card-opinion">
              <img src="../src/assets/cliente6.png" alt="" />
              <h4>Dra. Olga Castillo, alta especialidad en la mujer.</h4>
              <span className="author">Karina Fonseca</span>
            </div>
          </div>
          <div className="slider-opiniones">
            <div className="card-opinion">
              <img src="../src/assets/cliente6.png" alt="" />
              <h4>Donde nos preocupamos por tu bienestar integral.</h4>
              <span className="author">Karina Fonseca</span>
            </div>
          </div>
          <div className="slider-opiniones">
            <div className="card-opinion">
              <img src="../src/assets/cliente6.png" alt="" />
              <h4>
                Acompañamos cada etapa de tu embarazo con enfoque humanizado y
                atención personalizada.
              </h4>
              <span className="author">Karina Fonseca</span>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Opiniones;