import React, { useState } from "react";
import Slider from "react-slick";
import Slide1 from "../assets/swiper-1.webp";
import Slide2 from "../assets/swiper-2.webp";
import Slide3 from "../assets/swiper-2.webp";
import Slide4 from "../assets/slider-pc-1.webp";
import Slide5 from "../assets/slider-pc-2.webp";
import Slide6 from "../assets/slider-pc-3.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";

const Hero = () => {
  var settings = {
    infinite: true,
    speed: 4000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };
  return (
    <>
      <div className="slider-mobil">
        <Slider {...settings}>
          <div className="slider ">
            <img src={Slide1} alt="" className="slider-img " />
            <div className="text-slider">
              <h4>Dra. Olga Castillo, alta especialidad en la mujer.</h4>
            </div>
          </div>
          <div className="slider">
            <img src={Slide2} alt="" className="slider-img " />
            <div className="text-slider">
              <h4>Donde nos preocupamos por tu bienestar integral.</h4>
            </div>
          </div>
          <div className="slider">
            <img src={Slide3} alt="" className="slider-img " />

            <div className="text-slider">
              <h4>
                Acompañamos cada etapa de tu embarazo con enfoque humanizado y
                atención personalizada.
              </h4>
            </div>
          </div>
        </Slider>
      </div>
      <div className=" slider-compu">
        <Slider {...settings}>
          <div className="slider">
            <img src={Slide4} alt="" className="slider-img " />
            <div className="text-slider">
              <h4>Dra. Olga Castillo, alta especialidad en la mujer.</h4>
            </div>
          </div>
          <div className="slider">
            <img src={Slide5} alt="" className="slider-img " />
            <div className="text-slider">
              <h4>Donde nos preocupamos por tu bienestar integral.</h4>
            </div>
          </div>
          <div className="slider">
            <img src={Slide6} alt="" className="slider-img " />
            <div className="text-slider">
              <h4>
                Acompañamos cada etapa de tu embarazo con enfoque humanizado y
                atención personalizada.
              </h4>
            </div>
          </div>
        </Slider>
      </div>
      <div className="box-horarios">
        <div className="item-box-horarios">
          <div className="text-titles">
            <i class="fa-solid fa-heart-pulse"></i>
            <h2>Alta Especialidad en la Mujer</h2>
          </div>

          <p>
            Nuestro equipo de especialistas altamente capacitados en
            Ginecología, Obstetricia, Materno Fetal, Pediatría, Nutrición y
            Medicina Funcional están aquí para cuidar de ti y brindarte una
            experiencia integral completamente personalizada.
          </p>
        </div>
        <div className="item-box-horarios">
          <div className="text-titles">
            <i class="fa-regular fa-clock"></i> <h2>Nuestros Horarios</h2>
          </div>

          <div className="text-horario">
            <p>Lunes a Viernes</p> <p>9:00am a 20:00pm</p>
          </div>
          <div className="text-horario">
            <p>Sábado</p> <p>9:00am a 20:00pm</p>
          </div>
          <div className="text-horario">
            <p>Teléfono</p> <p>5564529359</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
