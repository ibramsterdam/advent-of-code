export function day6(file) {
  partOne(file);
  partTwo(file);
}

function partOne(input: string) {
  let totalScore = 0;
  let unique = [];
  const MAX_LENGTH = 4;

  input.split("").forEach((char: string) => {
    if (!hasDuplicates(unique) && unique.length === MAX_LENGTH) return;

    unique.push(char);
    totalScore++;

    if (hasDuplicates(unique) && unique.length === MAX_LENGTH) {
      unique.shift();
      return;
    }
  });

  console.log(`Result Part 1: ${totalScore}`);
}

function hasDuplicates(array: string[]) {
  return new Set(array).size !== array.length;
}

function partTwo(input: string) {
  let totalScore = 0;
  let unique = [];
  const MAX_LENGTH = 14;

  input.split("").forEach((char: string) => {
    if (!hasDuplicates(unique) && unique.length === MAX_LENGTH) return;

    unique.push(char);
    totalScore++;

    if (hasDuplicates(unique) && unique.length === MAX_LENGTH) {
      unique.shift();
      return;
    }
  });

  console.log(`Result Part 1: ${totalScore}`);
}
