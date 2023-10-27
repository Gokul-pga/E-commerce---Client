import Layout from "@/src/layout/Layout";
import Image from "next/image";
import React from "react";
import { NavBar } from "./components/Array";
import SliderImage from "./components/SliderImage";
import "animate.css";
import { useRouter } from "next/router";
import BlockBusterDeals from "./blockBusterDeals";
import TopDeals from "./topDeals";
import Products from "./products";

function Homepg() {
  const router = useRouter();
  return (
    <>
      <Layout>
        <div className=" w-full">
          <div className="flex flex-col lg:flex-row w-[100%] bg-[#fff] justify-between items-center sticky">
            <div className="flex flex-row w-[100%] lg:w-[75%] lg:gap-2 justify-around">
              {NavBar.map((item, id) => {
                return (
                  <div
                    key={id}
                    className="flex flex-col animate__animated animate__fadeInLeft gap-2 p-3 lg:p-0"
                  >
                    <div className="flex flex-row h-14 w-14 lg:h-20 lg:w-20 ">
                      <Image className="flex flex-row " src={item.path} />
                    </div>
                    <div
                      key={id}
                      className="flex flex-row w-full text-[#333333]  md:text-md text-xs font-semibold  cursor-pointer justify-evenly"
                    >
                      {item.title}
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="flex flex-row w-[100%] lg:w-[25%] gap-2 text-2xl font-semibold text-black font-serif justify-center items-center cursor-pointer p-2"
              onClick={() => {
                router.push("/BlockbusterPage");
              }}
            >
              <div className="w-20 ">
                <Image
                  className="lg:h-20 lg:w-20 w-14 h-14 rounded-full border-b-2 border-l-2 border-blue-400"
                  src={require("../src/components/assests/pheonix.png")}
                />
              </div>
              <div>Great Freedom Sale</div>
            </div>
          </div>

          <SliderImage />
          <Products />
          <BlockBusterDeals />
        </div>
      </Layout>
    </>
  );
}

export default Homepg;
