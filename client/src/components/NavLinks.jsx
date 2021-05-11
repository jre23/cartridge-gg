import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavLinks.css";

const NavLinks = () => {
  const location = useLocation();

  return (
    <>
      {/* // <!-- Background image  --> */}
      {/* <div
        className={
          location.pathname === "/"
            ? "bg-index"
            : location.pathname === "/games"
            ? "bg-games"
            : location.pathname === "/about"
            ? "bg-about"
            : "bg-index"
        }
        role="img"
        aria-label="Background image"
      ></div> */}

      <header>
        <nav
          className={
            location.pathname === "/"
              ? "navbar navbar-expand-lg navbar-dark nav-index"
              : location.pathname === "/games"
              ? "navbar navbar-expand-lg navbar-dark nav-games"
              : location.pathname === "/about"
              ? "navbar navbar-expand-lg navbar-dark nav-about"
              : location.pathname === "/rps"
              ? "navbar navbar-expand-lg navbar-dark nav-about"
              : "navbar navbar-expand-lg navbar-dark"
          }
        >
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <button
            className="navbar-toggler"
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
            className="collapse navbar-collapse justify-content-end"
            id="navbarToggle"
          >
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
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
                      ? "nav-link active nav-about"
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
