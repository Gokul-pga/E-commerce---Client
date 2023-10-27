import { API, JWT } from "@/src/envFile/api";
import React, { useEffect, useState } from "react";
import AdminPage from "./adminPage";
import Homepg from "./homepg";
import { useDispatch } from "react-redux";
import { getDetails } from "@/Redux/Slice";

export default function UserDetails() {
  const [Admin, setAdmin] = useState(false);
  const [userDatas, setuserDatas] = useState("");
  const dispatch = useDispatch();
  const collectData = async () => {
    try {
      await fetch(JWT + "/userData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          token: window.localStorage.getItem("Token"),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data, "Token");
          setuserDatas(data.data);
          // dispatch(getDetails(data.data));
          if (data.data.userType === "admin") {
            setAdmin(true);
          }
          if (data.data === "Token expired") {
            window.localStorage.clear;
            window.location.href = "/";
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  typeof window !== "undefined" &&
    window.localStorage.setItem("userDetails", JSON.stringify(userDatas));

  useEffect(() => {
    collectData();
    ("");
  }, []);

  return (
    <>
      {Admin ? (
        <AdminPage userData={userDatas} />
      ) : (
        <Homepg userData={userDatas} />
      )}
    </>
  );
}
