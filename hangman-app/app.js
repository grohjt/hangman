const puzzle = document.querySelector("#puzzle");
const guessses = document.querySelector("#guesses");
const game1 = new Hangman("Cat", 2);

puzzle.textContent = game1.getPuzzle();
guessses.textContent = game1.getStatus();

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzle.textContent = game1.getPuzzle();
  guessses.textContent = game1.getStatus();
  console.log(game1.status);
});
