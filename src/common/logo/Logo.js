import React from "react";
import ProductLogo from "../../assets/logo.svg";
import "./logo.css";
const Logo = () => {
  return (
    <div className="logo_container">
      <img src={ProductLogo} alt="Logo" />
    </div>
  );
};

export default Logo;
