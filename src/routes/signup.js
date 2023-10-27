import { toast } from "react-hot-toast";
import { API } from "../envFile/api";

export const createAccount = async (
  userType,
  firstName,
  lastName,
  email,
  password
) => {
  try {
    await fetch(API + "/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userType,
        firstName,
        lastName,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "registered");
        if (data.status === "ok") {
          toast.success("Added");
        }
      });
  } catch (error) {
    console.log(error);
  }
};
