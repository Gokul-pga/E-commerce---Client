import { createAccount } from "@/src/routes/signup";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

function Signup() {
  const router = useRouter();
  const [inputValue, setinputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "",
  });
  const { userType, firstName, lastName, email, password } = inputValue;

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      password !== "" &&
      userType !== ""
    ) {
      createAccount(userType, firstName, lastName, email, password);
      setinputValue({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        userType: "",
      });
      console.log(inputValue);
    } else {
      toast.error("All fields are mandatory!");
    }
  };

  return (
    <>
      <div className="flex flex-col  bg-white w-full h-screen md:justify-evenly md:flex-row ">
        <div className="flex flex-row items-center justify-center w-full h-64 md:h-full  md:w-1/2  bg-[#000000]">
          <Image
            className="w-1/4"
            width={500}
            height={500}
            alt="Picture of the logo"
            layout="responsive"
            src={require("../src/components/assests/amazon.webp")}
          />
        </div>
        <div className="flex flex-col h-full md:w-1/2 pt-14 md:justify-center items-center  bg-gray-300 ">
          <form className="flex flex-col  px-5 py-10 rounded-xl justify-center items-center gap-3">
            <Toaster position="top-right" />
            <div className="text-3xl font-semibold">Sign Up</div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <div className=" flex flex-row font-semibold gap-2">
                Register as :
                <input
                  className="px-3 py-2 rounded-md"
                  type="radio"
                  value="user"
                  name="userType"
                  onChange={(e) => {
                    setinputValue({ ...inputValue, userType: e.target.value });
                  }}
                />
                User
                <input
                  className="px-3 py-2 rounded-md"
                  type="radio"
                  value="admin"
                  name="userType"
                  onChange={(e) => {
                    setinputValue({ ...inputValue, userType: e.target.value });
                  }}
                />
                Admin
              </div>
              <div className="flex flex-col font-semibold">
                FirstName:
                <input
                  className="px-3 py-2 rounded-md"
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setinputValue({ ...inputValue, firstName: e.target.value });
                  }}
                />
              </div>
              <div className="flex flex-col font-semibold">
                LastName:
                <input
                  className="px-3 py-2 rounded-md"
                  type="text"
                  value={lastName}
                  onChange={(e) => {
                    setinputValue({ ...inputValue, lastName: e.target.value });
                  }}
                />
              </div>
              <div className="flex flex-col font-semibold">
                Email:
                <input
                  className="px-3 py-2 rounded-md"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setinputValue({ ...inputValue, email: e.target.value });
                  }}
                />
              </div>
              <div className="flex flex-col font-semibold">
                Password:
                <input
                  className="px-3 py-2 rounded-md"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setinputValue({ ...inputValue, password: e.target.value });
                  }}
                />
              </div>
            </div>
            <button
              onClick={HandleSubmit}
              className="px-8 py-2 bg-blue-500 rounded-md text-white"
            >
              Sign Up
            </button>
            <div className="flex flex-row justify-evenly items-center gap-4">
              <div>Already have account?</div>
              <button
                className=" font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/login");
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
