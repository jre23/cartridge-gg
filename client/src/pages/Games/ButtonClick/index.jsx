import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../../../components/Jumbotron";
import games from "../games.json";
import "../../../styles/EmbedIFrame.css";

const ButtonClick = (props) => {
  return (
    <>
      <Jumbotron>
        <h1>Button Click Game!</h1>
        <br />
        <h4>
          Click the green flag to play! {games[3].summary} {games[3].notes}
        </h4>
        <Link to="/games">
          <button className="btn btn-outline-light mt-3" type="button">
            GAMES
          </button>
        </Link>
      </Jumbotron>
      <main className="iFrame mx-auto">
        <div className="mb-5 ratio ratio-4x3">
          <iframe
            title="Button Click Scratch Game"
            src={games[3].embedSrc}
            allowtransparency="true"
            scrolling="no"
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default ButtonClick;
