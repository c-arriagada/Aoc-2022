const fs = require("fs");
const path = require("path");

const fileContent = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const input = fileContent.split("\n\n");
const parsedInput = input.map((caloriesPerElf) => {
  caloriesPerElf = caloriesPerElf.split("\n");
  return caloriesPerElf.map((food) => parseInt(food));
});

const caloriesPerElf = (input) => {
  return input.reduce((acc, calories) => acc + calories, 0);
};

const numberOfCalories = (input) => {
  let calories = [];
  for (let i = 0; i < parsedInput.length; i++) {
    let currentElf = parsedInput[i];
    let totalCalories = caloriesPerElf(currentElf);
    calories.push(totalCalories);
  }
  return calories;
};

const caloriesArray = numberOfCalories(input);
caloriesArray.sort((a, b) => b-a)
console.log(caloriesArray)

console.log(
  `PART 1: The elf carrying the most calories has ${caloriesArray[0]} calories`
); // 70296

console.log(
    `PART 2: The elf carrying the most calories has ${caloriesArray[0] + caloriesArray[1] + caloriesArray[2]} calories`
  ); // 205381
  
