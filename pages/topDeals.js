import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { getwishlist } from "@/Redux/Slice";
import Slider from "react-slick";
import Layout from "@/src/layout/Layout";

function TopDeals() {
  const router = useRouter();
  const fetchProducts = useSelector((state) => state.tasks.fetchProducts);
  const [wishlist, setWishlist] = useState();
  const dispatch = useDispatch();
  console.log(fetchProducts, "home");

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "red" }}
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
      <Layout>
        <div className="flex flex-row w-[100%] ">
          <div className="flex flex-col w-[100%]  py-6">
            <div
              className="flex flex-row w-full h-9 items-center justify-center cursor-pointer mb-3"
              onClick={() => {
                router.push("/products");
              }}
            >
              <div className="font-medium text-2xl font-serif">Top Deals</div>
              <div className="h-20 w-40">
                <Image src={require("../src/components/assests/offer.png")} />
              </div>
            </div>
            <Slider {...settings} className="flex flex-row w-[95%] gap-5 ">
              {fetchProducts.map((item, id) => {
                return (
                  <div
                    key={id}
                    className="flex flex-col w-[100%] p-3 gap-2 bg-[#F7F8F8] rounded-md"
                  >
                    <div className="flex flex-row sm:w-[70%] sm:h-[50%] lg:w-full lg:h-full p-3  rounded-md  lg:justify-center lg:items-center">
                      <img
                        src={item.image.url}
                        alt="images"
                        className="hover:scale-110 transition"
                      />
                    </div>
                    <div className="flex sm:flex-col lg:flex-row w-full justify-between items-center">
                      <div className="flex flex-row gap-1 bg-[#CC0C39] rounded-sm font-semibold p-1 text-white  ">
                        <div>Upto</div>
                        {item.offer}
                        <div>Offer</div>
                      </div>
                      <div className="text-[#CC0C39] font-medium text-sm ">
                        {item.type}
                      </div>
                    </div>
                    <div className="font-medium">{item.title}</div>
                    <div className="flex flex-row items-center">
                      <div>
                        <LiaRupeeSignSolid />
                      </div>
                      <div className="font-medium"> {item.price}</div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <div className="bg-orange-300 px-5 py-1 rounded-sm">
                        Buy now
                      </div>
                      <div
                        className="flex flex-row items-center gap-2"
                        onClick={() => {
                          const id = item._id;
                          dispatch(getwishlist(id));
                          console.log(id, "product id");
                          setWishlist("red");
                        }}
                      >
                        <div>Add to cart</div>
                        {"red" === wishlist ? (
                          <FcLike className="text-xl" />
                        ) : (
                          <AiOutlineHeart className="text-xl" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default TopDeals;
