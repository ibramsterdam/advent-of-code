export function day2(file) {
  partOne(file.split("\n"));
  partTwo(file.split("\n"));
}

let outcomeScore = {
  A: { X: 3, Y: 6, Z: 0 },
  B: { X: 0, Y: 3, Z: 6 },
  C: { X: 6, Y: 0, Z: 3 },
};

let shapeScore = { X: 1, Y: 2, Z: 3 };

function partOne(input: string[]) {
  let totalScore = 0;
  for (const round of input) {
    let [elf, me] = round.split(" ");
    totalScore += outcomeScore[elf][me] + shapeScore[me];
  }
  console.log(`Result Part 2: ${totalScore}`);
}

let chooseShape = {
  A: { X: "Z", Y: "X", Z: "Y" },
  B: { X: "X", Y: "Y", Z: "Z" },
  C: { X: "Y", Y: "Z", Z: "X" },
};

function partTwo(input: string[]) {
  let totalScore = 0;

  for (const round of input) {
    let [elf, me] = round.split(" ");
    me = chooseShape[elf][me];
    totalScore += outcomeScore[elf][me] + shapeScore[me];
  }
  console.log(`Result Part 2: ${totalScore}`);
}
