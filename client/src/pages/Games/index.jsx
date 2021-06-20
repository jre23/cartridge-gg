// index for Games components
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Games.css";
import Jumbotron from "../../components/Jumbotron";
import GamesContainer from "./GamesContainer";
import gameImg1 from "../../images/rps/unsplash_fadilahImani_rps.jpg";
import gameImg2 from "../../images/scratch/scratch_buttonClick.png";
import gameImg3 from "../../images/scratch/scratch_catNmouse.png";
import gameImg4 from "../../images/scratch/scratch_cheesyPuffs.png";

const Games = () => {
  // for console errors of variables not being used. these images are imported above for them to show up. otherwise will be blank
  // console.log(gameImg1[0] + gameImg2[0] + gameImg3[0] + gameImg4[0]);
  console.log(gameImg1, "1");
  console.log(gameImg2, "2");
  console.log(gameImg3, "3");
  console.log(gameImg4, "4");

  return (
    <>
      <main>
        <Jumbotron classNameComp={"jumboGame"}>
          <h1>Welcome! Choose a game below to play!</h1>
          <h5 className="hFive">
            There are descriptions below each game image to help describe the
            purpose of the game!
          </h5>
          <Link to="/about">
            <button className="btn btn-outline-dark mt-3 mx-2" type="button">
              ABOUT
            </button>
          </Link>
        </Jumbotron>
        <GamesContainer></GamesContainer>
      </main>
    </>
  );
};

export default Games;
