// index for Home component
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.css";

const Home = () => {
  return (
    <>
      <div className="bg-dark text-white d-flex w-100  h-100 text-center">
        <main className="my-auto w-100">
          <h1 className="mb-4">Cartridge GG</h1>
          <h4 className="w-75 mx-auto mb-4">
            A hub for games! This is a site for simple games I've created. Take
            a look at the Games page to play! Check the About page for my
            contact info, general inquiries, and the motivation behind this
            page!
          </h4>
          <Link to="/games">
            <button className="btn btn-outline-light mt-3" type="button">
              GAMES
            </button>
          </Link>
        </main>
      </div>
    </>
  );
};

export default Home;
