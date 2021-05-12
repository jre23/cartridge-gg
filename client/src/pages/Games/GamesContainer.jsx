import React from "react";
import games from "./games.json";
import GameImage from "../../components/GameImage";

const GamesContainer = () => {
  return (
    <>
      <div className="container px-3">
        <div className="row align-items-center gx-3">
          {games.map((item, index) => (
            <GameImage key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GamesContainer;
