import React from "react";
import rockImage from "../../images/rps/unsplash_morShani_rock.jpg";
import paperImage from "../../images/rps/unsplash_kellySikkema_paper.jpg";
import scissorsImage from "../../images/rps/unsplash_antonDarius_scissors.jpg";
import Jumbotron from "../../components/Jumbotron";

const RockPaperScissors = () => {
  // const [userChoice, setUserChoice] = useState({
  //   rockBool: false,
  //   paperBool: false,
  //   scissorsBool: false,
  // });

  const styles = {
    images: {
      height: "300px",
      width: "300px",
    },
    backgroundColor: {
      background: "red",
    },
  };

  const rockPaperScissors = (event) => {
    // Get user choice of rock paper or scissors
    let userChoice = event.target.getAttribute("data-value");
    // test if userChoice is valid
    if (
      (userChoice !== "rock" &&
        userChoice !== "paper" &&
        userChoice !== "scissors") ||
      userChoice === null ||
      userChoice === ""
    ) {
      alert("User input error! Type in 'rock' 'paper' or 'scissors'");
    } else {
      // get random computer choice value between 0 (inclusive) and 3 (exclusive)
      const computerChoice = Math.floor(Math.random() * 3);
      // create array of choices for the computer
      const choiceArray = ["rock", "paper", "scissors"];

      // compare user choice vs computer choice and decide whether it's a draw, lose, or win
      // use random computerChoice value to choose rock paper or scissors in the choiceArray (random number will correspond to the index in the array)
      if (userChoice === choiceArray[computerChoice]) {
        alert("It's a draw!");
      } else if (
        (userChoice === "rock" && choiceArray[computerChoice] === "paper") ||
        (userChoice === "paper" &&
          choiceArray[computerChoice] === "scissors") ||
        (userChoice === "scissors" && choiceArray[computerChoice] === "rock")
      ) {
        alert("You lose! Computer chose " + choiceArray[computerChoice] + "!");
      } else {
        alert("You win! Computer chose " + choiceArray[computerChoice] + "!");
      }
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     rockPaperScissors();
  //   }, 100);
  // }, []);

  return (
    <>
      <Jumbotron>
        <h1>Rock Paper Scissors</h1>
        <br />
        <h2>Choose an image!</h2>
      </Jumbotron>

      <div className="container px-3">
        <div className="row align-items-center gx-3">
          <div className="col-12 col-md-4">
            <div className="p-2 mb-3 text-center">
              <img
                src={rockImage}
                alt="Pile of rocks"
                className="img-fluid"
                style={styles.images}
                data-value="rock"
                onClick={rockPaperScissors}
              ></img>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-2 mb-3 text-center">
              <img
                src={paperImage}
                alt="Piece of paper"
                className="img-fluid"
                style={styles.images}
                data-value="paper"
                onClick={rockPaperScissors}
              ></img>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-2 mb-3 text-center">
              <img
                src={scissorsImage}
                alt="Pair of scissors"
                className="img-fluid"
                style={styles.images}
                data-value="scissors"
                onClick={rockPaperScissors}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RockPaperScissors;
