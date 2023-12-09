export function day3(file) {
  partOne(file.split("\n"));
  partTwo(file.split("\n"));
}

function partOne(input: string[]) {
  let overlappingEls = [];

  input.forEach((rucksack: string) => {
    const overlappingEl = rucksack
      .slice(0, rucksack.length / 2)
      .split("")
      .filter((e) => {
        return rucksack.slice(rucksack.length / 2).indexOf(e) > -1;
      })[0];

    overlappingEls.push(overlappingEl);
  });

  console.log(`Result Part 2: ${getScore(overlappingEls)}`);
}

function partTwo(input: string[]) {
  let overlappingEls = [];

  for (let i = 0; i < input.length; i++) {
    const overlappingEl = input[i]
      .split("")
      .filter((e) => {
        return input[i + 1].indexOf(e) > -1;
      })
      .filter((e) => {
        return input[i + 2].indexOf(e) > -1;
      })[0];

    overlappingEls.push(overlappingEl);

    i = i + 2;
  }

  console.log(`Result Part 2: ${getScore(overlappingEls)}`);
}

function getScore(overlappingEls: string[]): number {
  let totalScore = 0;

  overlappingEls.forEach((el: string) => {
    el === el.toLowerCase()
      ? (totalScore = totalScore + (el.charCodeAt(0) - 96))
      : (totalScore = totalScore + el.charCodeAt(0) - 38);
  });
  return totalScore;
}
