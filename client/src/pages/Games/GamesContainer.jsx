import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
      <div className="container">
        <div className="row align-items-center">
          <Link to="/rps" style={styles.backgroundColor1} className="col">
            RPS
          </Link>
          <div style={styles.backgroundColor2} className="col">
            One of three columns
          </div>
          <div style={styles.backgroundColor3} className="col">
            One of three columns
          </div>
        </div>
      </div>
    </>
  );
};

export default GamesContainer;
