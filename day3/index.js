const fs = require("fs");
const path = require("path");

const fileContent = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .split("\n");
const input = fileContent.map((rucksack) => {
  let halfwayPoint = rucksack.length / 2;
  let compartment1 = rucksack.slice(0, halfwayPoint);
  let compartment2 = rucksack.slice(halfwayPoint);
  return [compartment1, compartment2];
});

const findPriorityItems = (input) => {
  let priorityItems = [];

  // iterate over compartment 1 and check if any letter matches a letter in compartment 2
  // stop as soon as you find a matching letter
  // add priority item to priorityItems array
  for (let i = 0; i < input.length; i++) {
    let compartment1 = input[i][0];
    let compartment2 = input[i][1];
    for (let j = 0; j < compartment1.length; j++) {
      let currentItem = compartment1[j];
      if (compartment2.includes(currentItem)) {
        priorityItems.push(currentItem);
        break;
      }
    }
  }

  return priorityItems;
};

const getPriorityItemsValue = (items) => {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    if (item.charCodeAt(0) < 97) {
      // capital letters have values 27-52
      let value = item.charCodeAt(0) - 64 + 26;
      sum += value;
    } else {
      // lowercase letters have values 1-26
      let value = item.charCodeAt(0) - 96;
      sum += value;
    }
  }
  return sum;
};

const priorityItems = findPriorityItems(input);

console.log(
  `PART 1: the sum of the priorities of the item types is`,
  getPriorityItemsValue(priorityItems)
); // 7875

// **************** PART 2 *******************

const commonItemPerGroup = (input) => {
  const commonItems = [];
  for (let i = 0; i < input.length; i += 3) {
    let firstElf = input[i];
    console.log(firstElf)
    let secondElf = input[i + 1];
    let thirdElf = input[i + 2];
    for (let j = 0; j < firstElf.length; j++) {
      let item = firstElf[j];
      if (secondElf.includes(item) && thirdElf.includes(item)) {
        commonItems.push(item);
        break;
      }
    }
  }
  return commonItems;
};

let itemsPerGroup = commonItemPerGroup(fileContent);

let sumOfGroupItems = getPriorityItemsValue(itemsPerGroup)

console.log(
    `PART 2: the sum of the priorities of the item types is`,
    sumOfGroupItems
  ); //2479