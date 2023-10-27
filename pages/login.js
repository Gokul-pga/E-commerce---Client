import React, { useState } from "react";
import { login } from "@/src/routes/login";
import { useRouter } from "next/router";
import Image from "next/image";
import { Toaster, toast } from "react-hot-toast";

function Login() {
  const router = useRouter();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = value;

  const submitHandler = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      login(email, password);
      setValue({
        email: "",
        password: "",
      });
      router.push("/homepg");
    } else {
      toast.error("All fields are mandatory");
    }
  };
  return (
    <>
      <div className="flex flex-col  bg-white w-full h-screen md:justify-evenly md:flex-row ">
        <Toaster />
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
          <form className="flex flex-col  px-5 py-10 rounded-xl justify-center items-center gap-2">
            <div className="text-3xl font-semibold">Login</div>
            <div className="flex flex-col gap-3 items-center justify-center">
              <div className="flex flex-col font-semibold">
                Email:
                <input
                  className="px-3 py-2 rounded-md"
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setValue({ ...value, email: e.target.value });
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
                    setValue({ ...value, password: e.target.value });
                  }}
                />
              </div>
            </div>
            <div>
              <button
                className="px-5 py-1 bg-blue-500 rounded-md text-white"
                onClick={submitHandler}
              >
                Submit
              </button>
            </div>
            <div className="flex flex-row justify-evenly items-center gap-4">
              <div>Don't have account?</div>
              <button
                className="font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/signup");
                }}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
