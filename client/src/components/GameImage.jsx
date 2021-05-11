import React from "react";
import { Link } from "react-router-dom";

const GameImage = (props) => {
  console.log(props, "props");

  const styles = {
    backgroundColor: {
      background: "red",
      textAlign: "center",
    },
  };

  return (
    <>
      <div className="col-12 col-md-6">
        <div className="p-2 mb-3" style={styles.backgroundColor}>
          <Link to={props.url}>{props.gameTitle}</Link>
        </div>
      </div>
    </>
  );
};

export default GameImage;
