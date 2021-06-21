import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../../../components/Jumbotron";
import games from "../games.json";
import "../../../styles/EmbedIFrame.css";

const CatNMouse = (props) => {
  return (
    <>
      <Jumbotron>
        <h1>Cat N Mouse!</h1>
        <br />
        <h3>
          Click the green flag to play! {games[1].summary} {games[1].notes}
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
            title="Cat and Mouse Scratch Game"
            src={games[1].embedSrc}
            allowtransparency="true"
            scrolling="no"
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default CatNMouse;
