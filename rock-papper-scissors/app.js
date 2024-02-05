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
  const smallUserWord = "user".fontsize(3).sup();
  const compUserWord = "comp".fontsize(3).sub();
  const userChoice = document.getElementById(user);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(
    user
  )}${smallUserWord}  beats ${convertToWord(
    computer
  )}${compUserWord} . you win! 🔥`;
  userChoice.classList.add("green-glow");
  setTimeout(() => {
    userChoice.classList.remove("green-glow");
  }, 1000);
}

function lose(user, computer) {
  const smallUserWord = "user".fontsize(3).sup();
  const compUserWord = "comp".fontsize(3).sub();
  const userChoice = document.getElementById(user);
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertToWord(
    user
  )}${smallUserWord}  looses ${convertToWord(
    computer
  )}${compUserWord} . you lost... 💩`;
  userChoice.classList.add("red-glow");
  setTimeout(() => {
    userChoice.classList.remove("red-glow");
  }, 1000);
}

function draw(user, computer) {
  const smallUserWord = "user".fontsize(3).sup();
  const compUserWord = "comp".fontsize(3).sub();
  const userChoice = document.getElementById(user);
  result_p.innerHTML = `${convertToWord(
    user
  )}${smallUserWord}  beats ${convertToWord(
    computer
  )}${compUserWord} . It's a draw 🎃`;
  userChoice.classList.add("grey-glow");
  setTimeout(() => {
    userChoice.classList.remove("grey-glow");
  }, 1000);
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
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
}
main();
