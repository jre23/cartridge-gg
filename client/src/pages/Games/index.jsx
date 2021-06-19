// index for Games components
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Games.css";
import Jumbotron from "../../components/Jumbotron";
import GamesContainer from "./GamesContainer";
import gameImg1 from "../../images/rps/unsplash_fadilahImani_rps.jpg";

const Games = () => {
  // const [clickState, setClickState] = useState({
  //   gameTitle: "",
  //   summary: "",
  //   imgSrc: "",
  //   imgAlt: "",
  //   tech: "",
  // });

  return (
    <>
      {/* <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Album example</h1>
              <p className="lead text-muted">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
              <p>
                <a href="#" className="btn btn-primary my-2">
                  Main call to action
                </a>
                <a href="#" className="btn btn-secondary my-2">
                  Secondary action
                </a>
              </p>
            </div>
          </div>
        </section> */}
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
          <Link to="/rps">
            <button className="btn btn-outline-dark mt-3 mx-2" type="button">
              RPS
            </button>
          </Link>
        </Jumbotron>
        <GamesContainer></GamesContainer>
      </main>
    </>
  );
};

export default Games;
