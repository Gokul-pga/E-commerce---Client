import React from "react";
import { BlockBusterArray } from "./components/BlockbusterArra";
import Slider from "react-slick";
import Image from "next/image";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useRouter } from "next/router";

function BlockBusterDeals() {
  const router = useRouter();
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

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex flex-col h-2/5 gap-2 w-full overflow-hidden pb-5">
        <div className="flex flex-row pl-4 p-3 items-center text-center gap-3">
          <p className="sm:text-md lg:text-2xl font-semibold font-serif">
            Blockbuster Deals
          </p>
          <p
            className="sm:text-sm lg:text-lg hover:text-red-500 hover:underline cursor-pointer"
            onClick={() => {
              router.push("/BlockbusterPage");
            }}
          >
            See all deals
          </p>
        </div>
        <Slider {...settings} className="flex flex-row w-full gap-5 ">
          {BlockBusterArray.map((item, id) => {
            return (
              <div
                key={id}
                className="flex flex-col h-72 w-[100%] p-3 gap-3 rounded-md"
              >
                <div className="flex flex-row sm:w-[70%] sm:h-[50%] lg:w-full lg:h-full  p-3 bg-[#F7F8F8] rounded-md  lg:justify-center lg:items-center">
                  <Image
                    src={item.path}
                    alt="images"
                    className="hover:scale-110 transition rounded-md"
                  />
                </div>
                <div className="flex sm:flex-col lg:flex-row w-full justify-between items-center z-50">
                  <div className="bg-[#CC0C39] rounded-sm font-semibold p-1 text-white  ">
                    {item.offer}
                  </div>
                  <div className="text-[#CC0C39] font-medium text-sm ">
                    {item.type}
                  </div>
                </div>
                <div className="font-medium">{item.title}</div>
                <div className="flex flex-row items-center">
                  <div>
                    {" "}
                    <LiaRupeeSignSolid />
                  </div>
                  <div className="font-medium"> {item.price}</div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default BlockBusterDeals;
