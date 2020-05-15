class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = "playing";
  }
  getPuzzle() {
    let puzzle = "";
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });
    return puzzle;
  }
  makeGuess(letter) {
    if (this.status === "playing") {
      letter = letter.toLowerCase();
      if (!this.guessedLetters.includes(letter)) {
        this.guessedLetters.push(letter);
        if (!this.word.includes(letter)) {
          this.remainingGuesses--;
        }
      }
      this.calculateStatus();
    }
  }
  calculateStatus() {
    const finished = this.word.every((letter) => {
      return this.guessedLetters.includes(letter);
    });
    if (this.remainingGuesses === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }
  getStatus() {
    switch (this.status) {
      case "playing":
        return `Guesses left: ${this.remainingGuesses}`;
        break;
      case "failed":
        return `Nice try! The word was "${this.word.join("")}".`;
        break;
      case "finished":
        return `Great work! You guessed the word.`;
        break;
    }
  }
}
