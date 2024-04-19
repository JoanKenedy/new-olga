import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";

const Hero = () => {
  var settings = {
    infinite: true,
    fade: true,
    autoplaySpeed: 4000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="hero">
        <Slider {...settings}>
          <div className="slider">
            <img
              src="./src/assets/swiper-1.jpg"
              alt=""
              className="slider-img"
            />
            <div className="text-slider">
              <h4>La mejor clinica materno fetal</h4>
            </div>
          </div>
          <div className="slider">
            <img
              src="./src/assets/swiper-2.png"
              alt=""
              className="slider-img"
            />
            <div className="text-slider">
              <h4>La mejor clinica materno fetal</h4>
            </div>
          </div>
          <div className="slider">
            <img
              src="./src/assets/swiper-3.jpg"
              alt=""
              className="slider-img"
            />
            <div className="text-slider">
              <h4>La mejor clinica materno fetal</h4>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Hero;
