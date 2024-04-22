import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";

const Hero = () => {
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
      <div className="hero">
        <Slider {...settings} className="slider-mobil">
          <div className="slider ">
            <img
              src="./src/assets/swiper-1.jpg"
              alt=""
              className="slider-img "
            />
            <div className="text-slider">
              <h4>Dra. Olga Castillo, alta especialidad en la mujer.</h4>
            </div>
          </div>
          <div className="slider">
            <img
              src="./src/assets/swiper-2.jpg"
              alt=""
              className="slider-img "
            />
            <div className="text-slider">
              <h4>Donde nos preocupamos por tu bienestar integral.</h4>
            </div>
          </div>
          <div className="slider">
            <img
              src="./src/assets/swiper-3.jpg"
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
        <Slider {...settings} className="slider-compu">
          <div className="slider">
            <img
              src="./src/assets/slider-pc-1.jpg"
              alt=""
              className="slider-img "
            />
            <div className="text-slider">
              <h4>Dra. Olga Castillo, alta especialidad en la mujer.</h4>
            </div>
          </div>
          <div className="slider">
            <img
              src="./src/assets/slider-pc-2.jpg"
              alt=""
              className="slider-img "
            />
            <div className="text-slider">
              <h4>Donde nos preocupamos por tu bienestar integral.</h4>
            </div>
          </div>
          <div className="slider">
            <img
              src="./src/assets/slider-pc-3.jpg"
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
      <div className="box-horarios">
        <div className="item-box-horarios">
          <div className="text-title">
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
          <div className="text-title">
            <i class="fa-regular fa-clock"></i> <h2>Nuestros Horarios</h2>
          </div>

          <div className="text-horario">
            <p>Lunes a Viernes</p> <p>10:00am a 19:00pm</p>
          </div>
          <div className="text-horario">
            <p>Sábado</p> <p>10:00am a 15:00pm</p>
          </div>
          <div className="text-horario">
            <p>Teléfono</p> <p>5593689180</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
