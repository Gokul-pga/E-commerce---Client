import Layout from "@/src/layout/Layout";
import React from "react";
import { AiFillStar, AiFillTag, AiOutlineStar } from "react-icons/ai";
import { BiSolidOffer } from "react-icons/bi";
import {
  BsBoxSeam,
  BsCurrencyRupee,
  BsFillTagFill,
  BsShieldCheck,
  BsShieldFillCheck,
} from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

function ProductPreview() {
  const productPreview = useSelector(
    (state) => state.tasks.fetchProductPreview
  );
  return (
    <>
      <Layout>
        <div className="bg-white flex flex-col w-full ">
          <div className=" w-full p-2">
            <div>
              <IoClose className="text-2xl" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full  ">
            <div className=" flex flex-col w-full md:w-[50%] bg-white">
              <div className="flex flex-col w-full justify-center items-center">
                <img
                  src={productPreview.image.url}
                  alt="imges"
                  className="flex flex-col px-5 py-5 bg-white w-[50%] md:w-[70%] lg:w-[70%] "
                />
              </div>
            </div>
            <div className=" flex flex-col w-full md:w-[50%] px-3 md:pl-0 gap-2">
              <div className="text-2xl font-semibold">
                {productPreview.title}
              </div>
              <div className="text-md ">
                For more details visit official website
              </div>
              <div className="flex flex-row items-center gap-1">
                <div className="flex flex-row gap-1 text-[#FFA41C]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <div className="font-base">4.0 ratings</div>
              </div>
              <div className="flex flex-row items-center">
                <div>
                  <BsCurrencyRupee />
                </div>
                <div className="text-3xl font-semibold">
                  {productPreview.price}
                </div>
              </div>
              <div className="bg-red-600 px-2 py-1 rounded-md flex flex-row items-center gap-1">
                <div>
                  <BiSolidOffer className="text-white text-2xl" />
                </div>
                <div className="text-white">{productPreview.type}</div>
              </div>
              <div className="flex flex-row gap-1">
                <div>{productPreview.offer}</div>

                <div>Offer</div>
              </div>

              {/* avilable offer text */}
              <div className="flex flex-col gap-1">
                <div className="font-semibold">Available offers</div>
                <div className="flex flex-row items-center gap-2">
                  <div>
                    <BsFillTagFill className="text-red-600" />
                  </div>
                  <div className="text-sm">No cost EMI</div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div>
                    <BsFillTagFill className="text-red-600" />
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Bank Offer</span>10% off on
                    RBL Bank Credit Card, up to ₹1250 on orders of ₹5,000 and
                    above
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div>
                    <BsFillTagFill className="text-red-600" />
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Bank Offer</span> 10% off on
                    SBI Credit Card, up to ₹1250 on orders of ₹5,000 and above
                  </div>
                </div>
              </div>

              {/* product replacement */}
              <div className="flex flex-row gap-2 w-full md:w-[90%] items-center justify-evenly border-2 py-5 rounded-md">
                <div className="flex flex-col">
                  <div className="flex flex-row justify-center">
                    <BsBoxSeam className="text-xl text-[#FFA41C]" />
                  </div>
                  <div className="text-sm ">
                    7 days Service Centre Replacement
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>
                    <TbTruckDelivery className="text-xl text-[#FFA41C]" />
                  </div>
                  <div className="text-sm">Free Delivery</div>
                </div>
                <div className="flex flex-col">
                  <div>
                    <BsShieldFillCheck className="text-xl text-[#FFA41C]" />
                  </div>
                  <div className="text-sm">1 Year warrenty</div>
                </div>
                <div className="flex flex-col">
                  <div>
                    <BsBoxSeam className="text-xl text-[#FFA41C]" />
                  </div>
                  <div className="text-sm">Top Brand</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ProductPreview;
