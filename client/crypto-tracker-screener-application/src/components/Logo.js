import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";
const logo = () => {
  return (
    <Link
      to="/"
      className="absolute top-[1.5rem] left-[1.5rem] [text-decoration:none] flex items-center text-lg text-cyan"
    >
      <img src={logoSvg} alt="Crypto-Tracker" />
      <span>Crypto-Tracker</span>
    </Link>
  );
};

export default logo;
