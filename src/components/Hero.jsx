import React, { useState } from "react";
import Slider from "react-slick";
import Olga from "../assets/draOlga.png";
import Slide2 from "../assets/swiper-2.webp";
import Slide3 from "../assets/swiper-2.webp";
import Slide4 from "../assets/slider-pc-1.webp";
import Slide5 from "../assets/slider-pc-2.webp";
import Slide6 from "../assets/slider-pc-3.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";

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
            <a
              href="https://api.whatsapp.com/send/?phone=525564529359"
              target="_blank"
              className="btn-hero"
            >
              Contacto
            </a>
          </div>
          <div className="item-container-efect">
            <img src={Olga} alt="" className="img-olga" />
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="viewBox"
        >
          <path
            fill="#ba19a1"
            fill-opacity="1"
            d="M0,64L48,64C96,64,192,64,288,101.3C384,139,480,213,576,229.3C672,245,768,203,864,186.7C960,171,1056,181,1152,154.7C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="viewBox2"
        >
          <path
            fill="#ba19a1"
            fill-opacity="1"
            d="M0,64L48,101.3C96,139,192,213,288,202.7C384,192,480,96,576,85.3C672,75,768,149,864,202.7C960,256,1056,288,1152,272C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
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
