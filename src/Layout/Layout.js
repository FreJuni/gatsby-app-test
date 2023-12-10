import React from "react";
import Navebar from "../Navebar/Navebar.js";
import Footer from "../component/Footer";
import "../css/index.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navebar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
