import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import games from "./games.json";
import GameImage from "../../components/GameImage";

const GamesContainer = (props) => {
  console.log(props, "props");

  const styles = {
    backgroundColor1: {
      background: "red",
      textAlign: "center",
    },
    backgroundColor2: {
      background: "blue",
      textAlign: "center",
    },
    backgroundColor3: {
      background: "green",
      textAlign: "center",
    },
  };
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
