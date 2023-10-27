import Image from "next/image";
import React from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import Layout from "@/src/layout/Layout";
import { BlockBusterArray } from "./components/BlockbusterArra";

function BlockbusterPage() {
  return (
    <>
      <Layout>
        <div className="flex flex-col h-2/5 gap-2 w-full overflow-hidden items-center bg-white">
          <div className="flex flex-row pl-4 pt-3 justify-center items-center w-full  gap-3">
            <div className="w-16 ">
              <Image
                className="h-16 rounded-full border-b-2 border-l-2 border-blue-400"
                src={require("../src/components/assests/pheonix.png")}
              />
            </div>
            <p className="sm:text-md lg:text-2xl font-semibold font-serif">
              Great Freedom Sale
            </p>
          </div>
          <div className=" w-full gap-5  grid grid-cols-5">
            {BlockBusterArray.map((item, id) => {
              return (
                <div
                  key={id}
                  className="flex flex-col w-[100%] p-3 gap-2 bg-[#F7F8F8] rounded-md"
                >
                  <div className="flex flex-row sm:w-[70%] sm:h-[50%] lg:w-full lg:h-full p-3  rounded-md  lg:justify-center lg:items-center">
                    <Image
                      src={item.path}
                      alt="images"
                      className="hover:scale-110 transition"
                    />
                  </div>
                  <div className="flex sm:flex-col lg:flex-row w-full justify-between items-center">
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
          </div>
        </div>
      </Layout>
    </>
  );
}

export default BlockbusterPage;
