'use strict';

const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const finalResult = document.querySelector('.result');
const desc = document.querySelector('.desc');
const highScore = document.querySelector('.high-score');
// create random selector
let userScore = 0;
let compScore = 0;

const getCompChoice = function () {
  const computerGuess = Math.trunc(Math.random() * 3);
  if (computerGuess === 0) {
    return 'rock';
  } else if (computerGuess === 1) {
    return 'scissors';
  } else {
    return 'paper';
  }
};

const getUserChoice = function (weapon) {
  const user = weapon;
  const comp = getCompChoice();
  const result = getResult(user, comp);

  if (result === 'won') {
    userScore++;
  } else if (result === 'lost') {
    compScore++;
  }
  playerScore.innerText = userScore;
  computerScore.innerText = compScore;
  finalResult.innerText = getResult(user, comp);
  desc.innerText = `your picked ${user} computer picked ${comp} result is ${getResult(
    user,
    comp
  )}`;
  highScore.innerText = userScore;
  localStorage.setItem('highScore', userScore);
};

const getResult = function (userChoice, compChoice) {
  if (userChoice === 'rock') {
    if (compChoice === 'rock') {
      return 'draw';
    } else if (compChoice === 'scissors') {
      return 'won';
    } else if (compChoice === 'paper') {
      return 'lost';
    }
  } else if (userChoice === 'scissors') {
    if (compChoice === 'scissors') {
      return 'draw';
    } else if (compChoice === 'rock') {
      return 'lost';
    } else if (compChoice === 'paper') {
      return 'won';
    }
  } else if (userChoice === 'paper') {
    if (compChoice === 'paper') {
      return 'draw';
    } else if (compChoice === 'scissors') {
      return 'lost';
    } else if (compChoice === 'rock') {
      return 'won';
    }
  }
};
