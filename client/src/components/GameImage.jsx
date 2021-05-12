import React from "react";

const GameImage = (props) => {
  console.log(props, "props");

  return (
    <>
      <div className="col-12 col-md-6">
        <div className="p-2 mb-3">
          <img
            data-bs-toggle="modal"
            data-bs-target="#projectModal"
            className="img-fluid"
            alt={props.imgAlt}
            src={props.imgSrc}
            data-game={props.dataGame}
            data-value={props.index}
          />
        </div>
      </div>
    </>
  );
};

export default GameImage;
