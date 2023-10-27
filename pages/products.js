import { getProducts, productPreview } from "@/Redux/Slice";
import { getwishlist } from "@/Redux/Slice";
import { API } from "@/src/envFile/api";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const router = useRouter();
  const [productFetch, setproductFetch] = useState([]);
  const fetchProducts = useSelector((state) => state.tasks.fetchProducts);
  const dispatch = useDispatch();
  const [wishlist, setWishlist] = useState();

  // console.log(process.env.NEXT_PUBLIC_API, "API");
  const getDetails = async () => {
    try {
      await fetch(API + "/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Orgin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.data.status == "ok") {
            toast.success("Added");
          }
          // setproductFetch(data.data);
          dispatch(getProducts(data.data));
        });
    } catch (error) {
      console.log("fetch errore", error);
    }
  };

  useEffect(() => {
    getDetails();
  }, [productFetch]);
  console.log(productFetch, "GET");
  return (
    <>
      <div className="flex flex-col gap-4">
        <div
          onClick={() => {
            router.push("/topDeals");
          }}
          className="flex flex-row w-full md:h-11 h-3 gap-1 items-center justify-center cursor-pointer bg-gray-100 py-4"
        >
          <div className="font-medium md:text-2xl text-sm font-serif">
            Top Deals
          </div>
          <div className="h-14 w-14 md:h-20 md:w-40 md:mt-0 mt-6 items-center">
            <Image
              src={require("../src/components/assests/offer.png")}
              alt="images"
            />
          </div>
        </div>
        <div className=" w-full gap-5  grid md:grid-cols-4 lg:grid-cols-5 grid-cols-3">
          {fetchProducts.map((item, id) => {
            return (
              <div
                key={id}
                className="flex flex-col w-[100%] p-3 gap-2 bg-[#F7F8F8] rounded-md"
                onClick={() => {
                  router.push("/productPreview");
                  const id = item._id;
                  console.log(id, "product id");
                  dispatch(productPreview(id));
                }}
              >
                <div className="flex flex-row lg:w-full lg:h-full p-3  rounded-md  lg:justify-center lg:items-center">
                  <img
                    src={item.image.url}
                    alt="images"
                    className="hover:scale-110 transition"
                  />
                </div>
                <div className="flex flex-col lg:flex-row w-full justify-between items-center">
                  <div className="flex lg:flex-row md:font-md text-sm gap-1 bg-[#CC0C39] rounded-sm font-semibold p-1 text-white  ">
                    <div className="md:font-md text-xs">Upto</div>
                    {item.offer}
                    <div className="md:font-md text-xs">Offer</div>
                  </div>
                  <div className="text-[#CC0C39] font-medium text-sm ">
                    {item.type}
                  </div>
                </div>
                <div className="font-medium md:font-md text-xm">
                  {item.title}
                </div>
                <div className="flex flex-row items-center">
                  <div>
                    <LiaRupeeSignSolid />
                  </div>
                  <div className="font-medium md:font-md text-xs">
                    {item.price}
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="bg-orange-300 md:font-md text-xs px-5 py-1 rounded-sm">
                    Buy now
                  </div>
                  <div
                    className="flex flex-row items-center gap-2"
                    onClick={() => {
                      const id = item._id;
                      dispatch(getwishlist(id));
                      console.log(id, "product id");
                    }}
                  >
                    <div className="md:font-md text-xs">Add to cart</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
