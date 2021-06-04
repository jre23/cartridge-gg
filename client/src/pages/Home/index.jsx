// index for Home component
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.css";
import Jumbotron from "../../components/Jumbotron";

const Home = () => {
  return (
    <>
      <Jumbotron classComp={"jumboHome"}>
        <h1>Cartridge GG</h1>
        <h5>
          A hub for games! This is a site for simple games I've created. Take a
          look at the Games page to play! Check the About page for my contact
          info, general inquiries, and the motivation behind this page!
        </h5>
        <Link to="/games">
          <button className="btn btn-outline-light mt-3" type="button">
            GAMES
          </button>
        </Link>
      </Jumbotron>
    </>
  );
};

export default Home;
