import React from "react";

const Jumbotron = (props) => {
  return (
    <>
      <div className="p-4 mb-2 text-center">
        <div className="container-fluid py-3">
          <div className={props.classComp}>{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
