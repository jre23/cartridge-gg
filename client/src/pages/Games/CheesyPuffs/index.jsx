import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../../../components/Jumbotron";
import games from "../games.json";
import "../../../styles/EmbedIFrame.css";

const CheesyPuffs = (props) => {
  return (
    <>
      <Jumbotron>
        <h1>Cheesy Puffs!</h1>
        <br />
        <h3>
          Click the green flag to play! {games[2].summary} {games[2].notes}
        </h3>
        <Link to="/games">
          <button className="btn btn-outline-light mt-3" type="button">
            GAMES
          </button>
        </Link>
      </Jumbotron>
      <main className="iFrame mx-auto">
        <div className="mb-5 ratio ratio-4x3">
          <iframe
            title="Cheesy Puffs Scratch Game"
            src={games[2].embedSrc}
            allowtransparency="true"
            scrolling="no"
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default CheesyPuffs;
