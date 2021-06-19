import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const location = useLocation();
  return (
    <footer
      className="text-center"
      style={
        location.pathname === "/games"
          ? { backgroundColor: "#E8A87C", opacity: "0.8" }
          : location.pathname === "/about"
          ? { backgroundColor: "#7e685a", opacity: "0.8" }
          : { backgroundColor: "rgb(33, 37, 41)" }
      }
    >
      <p className="mb-0 py-1">&copy; Copyright 2021 Joel Estrada</p>
    </footer>
  );
};

export default Footer;
