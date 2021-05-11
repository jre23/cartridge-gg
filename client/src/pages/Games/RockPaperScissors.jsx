import React, { useState, useEffect } from "react";

const RockPaperScissors = () => {
  // const [userChoice, setUserChoice] = useState({
  //   rockBool: false,
  //   paperBool: false,
  //   scissorsBool: false,
  // });

  const rockPaperScissors = () => {
    // Get user choice of rock paper or scissors
    const userChoice = prompt(
      "Let's play rock, paper, scissors! Enter 'rock' 'paper' or 'scissors' to play!"
    );
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

  useEffect(() => {
    setTimeout(() => {
      rockPaperScissors();
    }, 100);
  }, []);

  return (
    <>
      <h1>RPS</h1>
    </>
  );
};

export default RockPaperScissors;
