import React from "react";

const GameImage = (props) => {
  // console.log(props, "props");

  return (
    <>
      <div className="card shadow-sm">
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
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameImage;
