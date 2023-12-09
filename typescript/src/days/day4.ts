export function day4(file) {
  partOne(file.split("\n"));
  partTwo(file.split("\n"));
}

function partOne(input: string[]) {
  let totalScore = 0;

  input.forEach((group: string) => {
    const sections = group
      .split(",")
      .map((char: string) => char.split("-"))
      .flatMap((char: string[]) => char)
      .map((char: string) => Number(char));

    if (sections[0] <= sections[2] && sections[1] >= sections[3]) {
      totalScore++;
    } else if (sections[0] >= sections[2] && sections[1] <= sections[3]) {
      totalScore++;
    }
  });

  console.log(`Result Part 2: ${totalScore}`);
}

function partTwo(input: string[]) {
  let totalScore = 0;

  input.forEach((group: string) => {
    const sections = group
      .split(",")
      .map((char: string) => char.split("-"))
      .flatMap((char: string[]) => char)
      .map((char: string) => Number(char));

    if (sections[0] < sections[2] && sections[1] < sections[2]) return;
    if (sections[0] > sections[2] && sections[0] > sections[3]) return;

    totalScore++;
  });

  console.log(`Result Part 2: ${totalScore}`);
}
