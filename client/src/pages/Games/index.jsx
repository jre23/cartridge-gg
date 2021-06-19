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
  // const [clickState, setClickState] = useState({
  //   gameTitle: "",
  //   summary: "",
  //   imgSrc: "",
  //   imgAlt: "",
  //   tech: "",
  // });
  console.log(gameImg1[0] + gameImg2[0] + gameImg3[0] + gameImg4[0]);

  return (
    <>
      <main>
        <Jumbotron classNameComp={"jumboGame"}>
          <h1>Welcome! Choose a game below to play!</h1>
          <h5 className="hFive">
            Clicking on an image will provide further details on the game!
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
