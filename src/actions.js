import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { JWT } from "./envFile/api";

export const addProducts = async (title, type, offer, price, productImg) => {
  try {
    await fetch(JWT + "/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Conteol-Allow-Origin": "*",
      },
      body: JSON.stringify({
        title,
        type,
        offer,
        price,
        image: productImg,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "added") {
          toast.success("Successfull added");
        }
        console.log("added", data.data);
      });
  } catch (error) {
    console.log(error);
  }
};
