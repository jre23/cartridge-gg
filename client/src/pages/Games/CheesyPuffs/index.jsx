import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../../../components/Jumbotron";
import games from "../games.json";

const CheesyPuffs = (props) => {
  return (
    <>
      <Jumbotron>
        <h1>Cheesy Puffs!</h1>
        <br />
        <h3>Click the green flag to play! {games[2].summary}</h3>
        <Link to="/games">
          <button className="btn btn-outline-light mt-3" type="button">
            GAMES
          </button>
        </Link>
      </Jumbotron>
      <main>
        <div className="text-center mt-5">
          <iframe
            title="Cheesy Puffs Scratch Game"
            src="https://scratch.mit.edu/projects/417041813/embed"
            allowtransparency="true"
            width="600"
            height="450"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default CheesyPuffs;
