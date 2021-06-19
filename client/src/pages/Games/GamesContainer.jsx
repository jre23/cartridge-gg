import React from "react";
import games from "./games.json";
import GameImage from "../../components/GameImage";

const GamesContainer = () => {
  return (
    <>
      <div className="album py-5 bg-transparent">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {games.map((item, index) => (
              <GameImage key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GamesContainer;
