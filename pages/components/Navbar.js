import Image from "next/image";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import Modal from "@mui/material/Modal";
import Userprofile from "./Userprofile";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const [userModal, setUserModal] = useState(false);
  const handleOpen = () => {
    setUserModal(true);
  };
  const handleClose = () => {
    setUserModal(false);
  };

  return (
    <>
      <div className="md:flex flex-col w-[100%] hidden  h-14 bg-[#e21f1f] ">
        <div className="flex flex-row w-full max-h-20 items-center bg-[#131921] gap-3 justify-evenly">
          {/* ----logo-------- */}
          <div
            className=" flex flex-row w-25 h-8 lg:w-42 lg:h-14 cursor-pointer"
            onClick={() => {
              router.push("/homepg");
            }}
          >
            <Image
              className="text-2xl h-20 rounded-md"
              alt="Picture of the logo"
              layout="responsive"
              src={require("../../src/components/assests/logo.png")}
            />
          </div>
          {/* ------------search bar -------------- */}
          <div className="flex flex-row w-1/4 lg:w-2/5 h-10 rounded-md items-center justify-around bg-[#fff]">
            <div className=" flex flex-row w-[90%] h-full items-center">
              <input
                className=" sm:w-[60%] lg:w-full border-solid border-2 pl-5 border-white"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="flex flex-row w-[10%] bg-[#FEBD69] rounded-r-md h-full items-center justify-center">
              <BsSearch className="text-[#131921] text-2xl cursor-pointer" />
            </div>
          </div>

          {/* ----------------- whislist ---------------- */}
          <div className="flex flex-row items-center cursor-pointer hover:text-black gap-1 px-3 py-1 rounded-md">
            <div className="text-[#fff]  font-semibold ">Orders</div>
          </div>
          {/* --------------Order -------------- */}
          <div className="flex flex-row items-center   gap-1 px-3 py-1 rounded-md">
            <div
              className="text-[#fff] font-semibold cursor-pointer px-3 py-1 rounded-md hover:transition-2s "
              onClick={() => {
                router.push(
                  {
                    pathname: "/wishlist",
                  },
                  null,
                  { shallow: true }
                );
              }}
            >
              Wislist
            </div>
          </div>

          {/* -------------- cart --------------- */}
          <div className="flex flex-row gap-2 items-center">
            <div className=" ">
              <FaOpencart className="text-[#fff] text-5xl " />
            </div>
            <div>
              <text className="text-[#fff]  font-semibold">Cart</text>
            </div>
          </div>
          {/* ---------------- User ------------------ */}
          <div
            className="flex flex-row gap-2 it cursor-pointer "
            onClick={() => {
              setUserModal((p) => !p);
            }}
          >
            <div className="text-[#fff] font-semibold ">User</div>
            <FaUserCircle className="text-[#fff] text-2xl " />
          </div>
        </div>

        {/* ---------2nd Navbar---------------- */}
        {userModal && (
          <Userprofile
            userModal={userModal}
            setUserModal={setUserModal}
            handleClose={handleClose}
          />
        )}
      </div>
    </>
  );
}
