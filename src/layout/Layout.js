import React from "react";
import Navbar from "../../pages/components/Navbar";
import Footer from "../../pages/components/Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
