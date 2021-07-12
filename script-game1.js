"use strict";

// console.log(document.querySelector('.message').textContent); // Exact same way to select on CSS
//
// document.querySelector('.message').textContent = 'Correct Number';
//
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = Number(20);

document.querySelector(".number").textContent = "?";

let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When player too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      score = score - 1;
      document.querySelector(".message").textContent = "Go lower!";
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;

      document.querySelector(".message").textContent = "You lose!";
    }
    // When player too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      score = score - 1;

      document.querySelector(".message").textContent = "Go higher!";
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;

      document.querySelector(".message").textContent = "You lose!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // let highscore = highscore;
  score = Number(20);
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;

  console.log(secretNumber);
  const guess = Number(document.querySelector(".guess").value);
});
