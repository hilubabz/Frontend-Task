import { useState } from "react";

const GuessTheNumber = () => {
  const [randomNumber, setRandomNumber] = useState<number>(
    Math.floor(Math.random() * 100) + 1,
  );
  const [guess, setGuess] = useState<number>();
  const [error, setError] = useState<string>("");
  const [attempts, setAttempts] = useState<number>(0);
  const [newGame, setNewGame] = useState<boolean>(false);
  console.log(randomNumber);
  const checkGuess = () => {
    setAttempts((prev) => prev + 1);
    if (guess == null || guess < 1 || guess > 100) {
      setError("Please enter a number between 1 and 100.");
    } else if (guess == randomNumber) {
      setError(
        `Congratulations! You guessed the number in ${attempts + 1} attempts.`,
      );
      setGuess(NaN);
      setNewGame(true);
    } else if (guess < randomNumber) {
      setError("Too low! Try again.");
      setGuess(NaN);
    } else {
      setError("Too high! Try again");
      setGuess(NaN);
    }
  };

  const resetGame = () => {
    setGuess(NaN);
    setAttempts(0);
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setError("");
    setNewGame(false);
  };
  return (
    <div className="text-center space-y-5">
      <div className="text-3xl font-bold">Guess The Number</div>
      <input
        type="number"
        className="border-1 w-[45%] focus:border-blue-500 focus:border-1"
        placeholder="Enter a number"
        id="guess-input"
        value={guess}
        onChange={(e) => setGuess(Number(e.target.value))}
      />
      <div className="flex gap-2 justify-center">
        <button
          className="cursor-pointer border-1 font-semibold text-lg px-1 py-2 rounded-2xl"
          onClick={checkGuess}
        >
          Check Guess
        </button>
        <button
          className="border-1 font-semibold text-lg px-1 py-2 rounded-2xl cursor-pointer"
          onClick={resetGame}
        >
          Reset Game
        </button>
      </div>
      <div className="text-xl font-bold">{error}</div>
      {newGame && (
        <div className="flex gap-2 justify-center">
          <button
            className="cursor-pointer border-1 font-semibold text-lg px-1 py-2 rounded-2xl"
            onClick={resetGame}
          >
            New Game
          </button>
        </div>
      )}
    </div>
  );
};

export default GuessTheNumber;
