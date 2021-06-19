import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../../../components/Jumbotron";
import games from "../games.json";

const CatNMouse = (props) => {
  return (
    <>
      <Jumbotron>
        <h1>Cat N Mouse!</h1>
        <br />
        <h3>Click the green flag to play! {games[1].summary}</h3>
        <Link to="/games">
          <button className="btn btn-outline-light mt-3" type="button">
            GAMES
          </button>
        </Link>
      </Jumbotron>
      <br />
      <br />
      <main>
        <div className="text-center mt-5">
          <iframe
            title="Cat and Mouse Scratch Game"
            src="https://scratch.mit.edu/projects/417439739/embed"
            allowtransparency="true"
            width="485"
            height="402"
            frameborder="0"
            scrolling="no"
            allowfullscreen
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default CatNMouse;
