import React, { useState } from "react";
import Slider from "react-slick";
import Olga from "../assets/heroOlga.png";
import Slide2 from "../assets/swiper-2.webp";
import Slide3 from "../assets/swiper-2.webp";
import Slide4 from "../assets/slider-pc-1.webp";
import Slide5 from "../assets/slider-pc-2.webp";
import Slide6 from "../assets/slider-pc-3.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1300,
    autoplaySpeed: 1300,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <>
      <div class="waveContainer">
        <div className="container-efect">
          <div className="item-container-efect">
            <h2>Reciba el mejor tratamiento de calidad para</h2>
            <div className="slider-vertical">
              <div className="slider-container">
                <Slider {...settings}>
                  <div>
                    <h3 className="text-morado">MÉDICINA MATERNO FETAL</h3>
                  </div>
                  <div>
                    <h3 className="text-morado">Embarazo de alto riesgo</h3>
                  </div>
                  <div>
                    <h3 className="text-morado">Control prenatal</h3>
                  </div>
                  <div>
                    <h3 className="text-morado">Ultrasonidos 3D y 4D</h3>
                  </div>
                </Slider>
              </div>
            </div>
            <p>Nuestros pacientes, nuestra prioridad.</p>
            <Link to={"/services"} className="btn-hero">
              Todos los servicios
            </Link>
            <Link
              to={"https://api.whatsapp.com/send/?phone=525564529359"}
              className="btn-redes-hero"
              target="_blank"
            >
              <i class="fa-brands fa-square-whatsapp"></i>
            </Link>
            <Link
              to={"tel:5564529359"}
              target="_blank"
              className="btn-redes-hero"
            >
              <i class="fa-solid fa-square-phone"></i>
            </Link>
            <Link
              to={"https://maps.app.goo.gl/tRbRvist7tDVxUnQ8"}
              target="_blank"
              className="btn-redes-hero"
            >
              <i class="fa-solid fa-map-location-dot"></i>
            </Link>
          </div>
          <div className="item-container-efect"></div>
        </div>
      </div>

      <div className="box-horarios">
        <div className="item-box-horarios">
          <div className="text-titles">
            <i class="fa-solid fa-heart-pulse"></i>
            <h2>Alta Especialidad en Médicina Materno Fetal</h2>
          </div>

          <p>
            La Medicina Materno Fetal, es una subespecialidad de la Obstetricia
            que se centra en el diagnóstico, tratamiento y cuidado de mujeres
            que tienen un alto riesgo de tener problemas durante el embarazo, ya
            sea por condición materna o fetal; con un enfoque amplio en el
            conocimiento de las complicaciones obstétricas y sus efectos sobre
            la madre y el feto.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
