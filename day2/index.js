const scores = {
  "A X": 3, // draw - rock and rock
  "A Y": 6, // win - paper defeats rock
  "A Z": 0, // loss - rock defeats scissors
  "B X": 0, // loss - paper defeats rock
  "B Y": 3, // draw - paper and paper
  "B Z": 6, // win - scissors defeats paper
  "C X": 6, // win - rock defeats scissors
  "C Y": 0, // loss - scissors defeats paper
  "C Z": 3, // draw - scissors and scissors
};

const fs = require("fs");
const path = require("path");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .split("\n");

const getTotalScore = (input) => {
  let score = 0;

  for (let i = 0; i < input.length; i++) {
    let round = input[i];
    let partialScore = 0;
    if (round[2] === "X") {
      partialScore += 1;
    } else if (round[2] === "Y") {
      partialScore += 2;
    } else {
      partialScore += 3;
    }
    partialScore += scores[round];
    score += partialScore;
  }
  return score;
};

console.log(
  "PART 1: total score if you follow strategy guide",
  getTotalScore(input)
); // 10816

// ***************** PART 2 *******************
// Updated scores guide
// value [points for winning, points for using rock, paper, scissors]
const updatedScores = {
  "A Y": [3, 1], // draw - rock and rock
  "A Z": [6, 2], // win - paper defeats rock
  "A X": [0, 3], // loss - rock defeats scissors
  "B X": [0, 1], // loss - paper defeats rock
  "B Y": [3, 2], // draw - paper and paper
  "B Z": [6, 3], // win - scissors defeats paper
  "C Z": [6, 1], // win - rock defeats scissors
  "C X": [0, 2], // loss - scissors defeats paper
  "C Y": [3, 3], // draw - scissors and scissors
};

const getUpdatedScore = (input) => {
  let score = 0;

  for (let i = 0; i < input.length; i++) {
    let round = input[i];
    let partialScore = 0;
    const [status, rps] = updatedScores[round];
    partialScore = status + rps;
    score += partialScore;
  }
  return score;
};

console.log(
  "PART 2: total score if you follow correct strategy guide",
  getUpdatedScore(input)
); // 11657
