import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: false
  };

  const images = [
    {img: `${process.env.PUBLIC_URL}/image/spring.jpg`},
    {img: `${process.env.PUBLIC_URL}/image/summer.jpg`},
    {img: `${process.env.PUBLIC_URL}/image/fall.jpg`},
    {img: `${process.env.PUBLIC_URL}/image/winter.jpg`},
  ]

  return (
    <Slider {...settings}>
      {images && images.map(image => {
        return (
          <div className="relative">
            <img src={image.img} className="z-40 sm:h-[600px] w-full"/>
            <p className="text-4xl sm:text-7xl font-bold text-white z-50 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">Company</p>
          </div>
        )
      })}
    </Slider>
  );
}

export default SimpleSlider;