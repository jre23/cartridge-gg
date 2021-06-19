// index for Home component
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.css";

const Home = () => {
  return (
    <>
      <main className="mainContainer bg-dark text-white text-center">
        <div className="my-auto">
          <h1 className="mb-4">Cartridge GG</h1>
          <p className="w-75 mx-auto mb-4 mw-100 homeFont">
            A hub for games! This is a site for simple games I've created. Take
            a look at the Games page to play! Check the About page for a little
            about myself and how to connect with me!
          </p>
          <Link to="/games">
            <button className="btn btn-outline-light mt-3" type="button">
              GAMES
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
