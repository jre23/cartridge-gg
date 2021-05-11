// index for Games components
import React, { useState, useEffect } from "react";
import Jumbotron from "../../components/Jumbotron";
import GamesContainer from "./GamesContainer";

const Games = () => {
  const [clickState, setClickState] = useState({
    gameTitle: "",
    summary: "",
    imgSrc: "",
    imgAlt: "",
    tech: "",
  });

  return (
    <>
      <Jumbotron>
        <h1>Welcome! Choose a game below to play!</h1>
        <br />
        <h2>Clicking on an image will provide further details on the game!</h2>
      </Jumbotron>
      <GamesContainer></GamesContainer>
    </>
  );
};

export default Games;
