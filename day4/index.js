// find in how many assignment pairs does one range fully contain the other

const fs = require("fs");
const path = require("path");

const fileContent = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .split("\n");
// input = [[['2', '9'], ['3', '5']], [['1', '5'], ['6', '8']]]
const input = fileContent.map((pair) => {
  pair = pair.split(",");
  pair = pair.map((range) => range.split("-"));
  return pair;
});

const rangesFullyContained = (data) => {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    const [range1, range2] = input[i];
    const [start1, end1] = range1.map(Number);
    const [start2, end2] = range2.map(Number);
    if (
      (start1 >= start2 && end1 <= end2) ||
      (start2 >= start1 && end2 <= end1)
    ) {
      count++;
    }
  }
  return count;
};

let totalPairsContained = rangesFullyContained(input);
console.log(
  "PART 1: the total number of pairs fully contain in the other is",
  totalPairsContained
); // 542


// ************************** PART 2 *****************************
// find number of pairs that overlap at all, no pair doesn't need to be fully contained by second pair

const rangesThatOverlap = (data) => {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
      const [range1, range2] = input[i];
      const [start1, end1] = range1.map(Number);
      const [start2, end2] = range2.map(Number);
      if (
        (start1 >= start2 && start1 <= end2) ||
        (start2 >= start1 && start2 <= end1)
      ) {
        count++;
      }
    }
    return count;
  };

let numOfOverlapingRanges = rangesThatOverlap(input);
console.log(
  "PART 2: the total number of assignment pairs where the ranges overlap",
  numOfOverlapingRanges
); // 900