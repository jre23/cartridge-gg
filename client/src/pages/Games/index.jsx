// index for Games components
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Games.css";
import Jumbotron from "../../components/Jumbotron";
import GamesContainer from "./GamesContainer";
import gameImg1 from "../../images/rps/unsplash_fadilahImani_rps.jpg";

const Games = () => {
  // const [clickState, setClickState] = useState({
  //   gameTitle: "",
  //   summary: "",
  //   imgSrc: "",
  //   imgAlt: "",
  //   tech: "",
  // });

  return (
    <>
      <Jumbotron classComp={"jumboGame"}>
        <h1>Welcome! Choose a game below to play!</h1>
        <h5 className="hFive">
          Clicking on an image will provide further details on the game!
        </h5>
        <Link to="/about">
          <button className="btn btn-outline-light mt-3" type="button">
            ABOUT
          </button>
        </Link>
        <Link to="/rps">
          <button className="btn btn-outline-light mt-3" type="button">
            RPS
          </button>
        </Link>
      </Jumbotron>
      <GamesContainer></GamesContainer>
    </>
  );
};

export default Games;
