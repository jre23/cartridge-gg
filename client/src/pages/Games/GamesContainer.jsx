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
      <div className="container px-3">
        <div className="row align-items-center gx-3">
          <div className="col-12 col-md-6">
            <div className="p-2 mb-3" style={styles.backgroundColor1}>
              <Link to="/rps">RPS</Link>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="p-2 mb-3" style={styles.backgroundColor2}>
              <Link to="/rps">RPS</Link>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="p-2 mb-3" style={styles.backgroundColor3}>
              <Link to="/rps">RPS</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamesContainer;
