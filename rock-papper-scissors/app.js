let userScore = 0;
let computerScore = 0;
// DOM variable "_tag name"
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// so above we have cached DOM => storingin the variable and running the process one time
// and we have the  referrence point init
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
}
function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sup();
  const compUserWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(
    user
  )}${smallUserWord}  beats ${convertToWord(
    computer
  )}${compUserWord} . you win! 🔥`;
}

function lose(user, computer) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  const smallUserWord = "user".fontsize(3).sup();
  const compUserWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(
    user
  )}${smallUserWord}  looses ${convertToWord(
    computer
  )}${compUserWord} . you lost... 💩`;
}

function draw(user, computer) {
  const smallUserWord = "user".fontsize(3).sup();
  const compUserWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(
    user
  )}${smallUserWord}  beats ${convertToWord(
    computer
  )}${compUserWord} . It's a draw 🎃`;
}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
}
main();
