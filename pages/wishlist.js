import { removeWishlist } from "@/Redux/Slice";
import { URL } from "@/src/envFile/api";
import Layout from "@/src/layout/Layout";
import { Button } from "@mui/material";
import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";

function Wishlist() {
  const fetchWishlist = useSelector((state) => state.tasks.fetchWishlist);
  console.log("fetch items", fetchWishlist);
  const dispatch = useDispatch();
  const deleteItem = async (id) => {
    try {
      await fetch(URL + `/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "deleted");
          if (data.status === "Deleted") {
            toast.success("Deleted");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Layout>
        <div className="flex flex-col w-[100%]">
          <Toaster />
          <div className="flex flex-row w-[100%] items-center justify-center p-3 bg-rose-400">
            <p className="text-2xl font-medium font-serif">Wishlist</p>
          </div>
          <div className=" w-full gap-5  grid grid-cols-5">
            {fetchWishlist.map((item, id) => {
              return (
                <div
                  key={id}
                  className="flex flex-col w-[100%] p-3 gap-2 bg-[#F7F8F8] rounded-md"
                >
                  <div className="flex flex-row sm:w-[70%] sm:h-[50%] lg:w-full lg:h-full p-3  rounded-md  lg:justify-center lg:items-center">
                    <img
                      // src={fetchWishlist?.image?.url}
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
                  <div className="flex flex-row justify-between">
                    <div>
                      <Button className="bg-orange-300 text-black">
                        Buy Now
                      </Button>
                    </div>
                    <div>
                      <Button
                        className="bg-blue-300 text-black"
                        onClick={() => {
                          const id = fetchWishlist._id;
                          dispatch(removeWishlist(id));
                          console.log("dlt items", fetchWishlist);
                        }}
                      >
                        Remove
                      </Button>
                    </div>
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

export default Wishlist;
