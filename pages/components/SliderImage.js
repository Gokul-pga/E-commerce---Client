import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { Slideimg } from "../components/Array";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function SliderImage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div>
        <Slider
          {...settings}
          className="flex flex-row  w-[100%]  overflow-hidden"
        >
          {Slideimg.map((item) => (
            <div key={item.id} className="flex flex-col h-full w-[100%]">
              <Image
                className="flex flex-row"
                layout="responsive"
                src={item.path}
                alt={item.title}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default SliderImage;
