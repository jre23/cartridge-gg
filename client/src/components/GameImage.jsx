import React from "react";
import { Link } from "react-router-dom";

const GameImage = (props) => {
  // console.log(props, "props");

  return (
    <>
      <div className="card shadow-sm bg-transparent">
        <img
          data-bs-toggle="modal"
          data-bs-target="#projectModal"
          className="img-fluid"
          alt={props.imgAlt}
          src={props.imgSrc}
          data-game={props.dataGame}
          data-value={props.index}
        />

        <div className="card-body">
          <p className="card-text">{props.summary}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link to={props.url}>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  type="button"
                >
                  Play
                </button>
              </Link>
            </div>
            <small className="text-muted">JRE</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameImage;
