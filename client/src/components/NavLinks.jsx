import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavLinks.css";

const NavLinks = () => {
  const location = useLocation();

  return (
    <>
      {/* <!-- Background image  --> */}
      <div
        className={
          location.pathname === "/"
            ? "bg-index"
            : location.pathname === "/games"
            ? "bg-games"
            : location.pathname === "/about"
            ? "bg-about"
            : "bg-gaming"
        }
        role="img"
        aria-label="Background image"
      ></div>

      <header>
        <nav
          className={
            location.pathname === "/"
              ? "navbar navbar-expand-lg navbar-dark bg-dark"
              : location.pathname === "/games"
              ? "navbar navbar-expand-lg navbar-dark nav-games"
              : location.pathname === "/about"
              ? "navbar navbar-expand-lg navbar-dark nav-gaming"
              : "navbar navbar-expand-lg navbar-dark nav-gaming"
          }
        >
          <button
            className="navbar-toggler mx-4"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggle"
            aria-controls="navbarToggle"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navbar-custom mx-4 justify-content-center"
            id="navbarToggle"
          >
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    location.pathname === "/"
                      ? "nav-link active nav-index"
                      : "nav-link"
                  }
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/games"
                  className={
                    location.pathname === "/games"
                      ? "nav-link active nav-games"
                      : "nav-link"
                  }
                >
                  Games
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={
                    location.pathname === "/about"
                      ? "nav-link active nav-gaming"
                      : "nav-link"
                  }
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavLinks;
