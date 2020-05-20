const puzzle = document.querySelector("#puzzle");
const guessses = document.querySelector("#guesses");
let game1;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

const render = () => {
  puzzle.innerHTML = "";
  guessses.textContent = game1.getStatus();
  game1
    .puzzle()
    .split("")
    .forEach((letter) => {
      const letterEl = document.createElement("span");
      letterEl.textContent = letter;
      puzzle.appendChild(letterEl);
    });
};

const startGame = async () => {
  const puzzleGame = await getPuzzle("2");
  game1 = new Hangman(puzzleGame, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();
