import React from "react";

function Footer() {
  return (
    <>
      <div className="flex flex-col pl-5 gap-2 md:pl-0 md:flex-row w-[100%] justify-evenly bg-[#232F3E] text-md text-white pt-5">
        <div className="flex flex-col">
          <div className="font-bold">Get to Know us</div>
          <div className="flex flex-col ">
            <h5>About Us</h5>
            <h5>Careers</h5>
            <h5>Press Releases</h5>
            <h5>e-commerce Science</h5>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="font-bold">Connect with us</div>
          <div className="flex flex-col ">
            <h6>Facebook</h6>
            <h5>Instagram</h5>
            <h6>Twitter</h6>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">Get to Know us</div>
          <div className="flex flex-col ">
            <h5 className="hover:underline">Sell on Amazon</h5>
            <h5>Sell under Amazon Accelerator</h5>
            <h5>Protect and Build Your Brand</h5>
            <h5>Amazon Global Selling</h5>
            <h5>Become an Affiliate</h5>
            <h5>Fulfilment by Amazon</h5>
            <h5>Advertise Your Products</h5>
            <h5>Amazon Pay on Merchants</h5>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="font-bold">Get to Know us</div>
          <div className="flex flex-col ">
            <h5>COVID-19 and Amazon</h5>
            <h5>Your Account</h5>
            <h5>Returns Centre</h5>
            <h5>100% Purchase Protection</h5>
            <h5>Amazon App Download</h5>
            <h5>Help</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
