import React from "react";
import { useSelector } from "react-redux";
import { GrFormClose } from "react-icons/gr";
import { Box, Button, Modal } from "@mui/material";
import "animate.css";

function Userprofile({ userModal, setUserModal, handleOpen }) {
  const windows =
    typeof window !== "undefined" && window.localStorage.getItem("userDetails");
  const fetchDetails = JSON.parse(windows);
  console.log(fetchDetails);

  const handleClose = () => {
    setUserModal(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "end",
          // bgcolor: "red",
          zIndex: 1000,
        }}
      >
        <div className="flex flex-col w-40 bg-purple-200 items-center py-5 gap-2 rounded-lg animate__animated animate__fadeIn">
          <div className="flex flex-row items-center w-full justify-between">
            <div className="flex flex-row justify-evenly items-center w-full">
              <div className="flex flex-row justify-between font-serif font-semibold text-md">
                UserDetils
              </div>
              <div>
                <GrFormClose className="text-2xl" onClick={handleClose} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-sm font-serif">
            <p>User : {fetchDetails.firstName}</p>
            <p>Email : {fetchDetails.email}</p>
            <p>User : {fetchDetails.userType}</p>
          </div>
          <Button
            variant="contained"
            size="small"
            className="cursor-pointer"
            onClick={() => {
              window.localStorage.clear();
              window.location.href = "/";
            }}
          >
            Logout
          </Button>
        </div>
      </Box>
    </>
  );
}

export default Userprofile;
