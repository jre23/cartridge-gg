import React from "react";

const styles = {
  bg: {
    background: "#ffffff",
  },
  text: {
    color: "red",
  },
};

const Home = () => {
  return (
    <>
      <div style={styles.bg}>
        <h1 style={styles.text}>Home</h1>
      </div>
    </>
  );
};

export default Home;
