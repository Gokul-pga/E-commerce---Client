import React, { useState } from "react";
import Navbar from "./components/AdminPages/Navbar";
import { Button } from "@mui/material";
import { addProducts } from "@/src/actions";
import { Toaster } from "react-hot-toast";
import Image from "next/image";

export default function AdminPage({ userData }) {
  const [productImg, setproductImg] = useState("");
  const [inputValue, setInputValue] = useState({
    title: "",
    type: "",
    offer: "",
    price: "",
  });
  const transformFile = (file) => {
    const reader = new FileReader(file);
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setproductImg(reader.result);
      };
    } else {
      setproductImg("");
    }
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    transformFile(file);
  };
  const { title, type, offer, price } = inputValue;

  const submitandle = () => {
    if (title !== "" && type !== "" && offer !== "" && price !== "") {
      addProducts(title, type, offer, price, productImg);
      setInputValue({
        title: "",
        type: "",
        offer: "",
        price: "",
      });
      setproductImg(false);
      console.log(inputValue);
    } else console.log("All fields are mandatory");
  };

  return (
    <div className="flex flex-col w-full items-center">
      <Toaster />
      <Navbar />
      <div className="flex flex-row w-[60%] items-center justify-center gap-4 bg-purple-400 mt-5 rounded-md">
        <div className="flex flex-col items-center pt-3">
          <div>
            <div className="font-medium text-2xl">Add Item</div>
          </div>
          <div cl className="flex flex-col gap-3  p-10">
            <input
              className="px-3 py-1 rounded-md"
              type="text"
              value={title}
              onChange={(e) => {
                setInputValue({ ...inputValue, title: e.target.value });
              }}
              placeholder="Product Name"
            />
            <input
              className="px-3 py-1 rounded-md"
              type="text"
              value={type}
              onChange={(e) => {
                setInputValue({ ...inputValue, type: e.target.value });
              }}
              placeholder="Any offer name"
            />
            <input
              className="px-3 py-1 rounded-md"
              type="text"
              value={offer}
              onChange={(e) => {
                setInputValue({ ...inputValue, offer: e.target.value });
              }}
              placeholder="Any offers"
            />
            <input
              className="px-3 py-1 rounded-md"
              type="text"
              value={price}
              onChange={(e) => {
                setInputValue({ ...inputValue, price: e.target.value });
              }}
              placeholder="Product Price"
            />
            <input
              className="px-3 py-1 rounded-md"
              type="file"
              accept="image/*"
              onChange={handleImage}
              placeholder="Image"
            />
            <Button variant="contained" onClick={submitandle}>
              Submit
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center bg-white w-[40%] rounded-md py-3">
          <div>
            {productImg == "" || productImg == null ? (
              <div>No Preview Available</div>
            ) : (
              <Image src={productImg} width={200} height={90} />
            )}
          </div>
          <div className="font-medium text-xl font-serif">Image Preview</div>
        </div>
      </div>
    </div>
  );
}
