import { toast } from "react-hot-toast";
import { JWT } from "../envFile/api";

export const login = async (email, password) => {
  try {
    await fetch(JWT + "/login-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data, "Login successfully");
        if (data.status === "ok") {
          toast.success("Successfully logined");
        }
        window.localStorage.setItem("Token", data.data);
        window.location.href = "/userDetails";
      });
  } catch (error) {
    console.log(error);
  }
};
