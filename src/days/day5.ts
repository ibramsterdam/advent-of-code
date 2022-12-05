export function day5(file) {
  partOne(file.split("\n"));
  partTwo(file.split("\n"));
}

function partOne(input: string[]) {
  const stacks = [
    [],
    ["N", "D", "M", "Q", "B", "P", "Z"],
    ["C", "L", "Z", "Q", "M", "D", "H", "V"],
    ["Q", "H", "R", "D", "V", "F", "Z", "G"],
    ["H", "G", "D", "F", "N"],
    ["N", "F", "Q"],
    ["D", "Q", "V", "Z", "F", "B", "T"],
    ["Q", "M", "T", "Z", "D", "V", "S", "H"],
    ["M", "G", "F", "P", "N", "Q"],
    ["B", "W", "R", "M"],
  ];
  const cleanInput = input.map((commando: string) =>
    commando
      .replace("move ", "")
      .replace("from ", "")
      .replace("to ", "")
      .split(" ")
  );

  cleanInput.forEach((moveset: string[]) => {
    for (let i = 0; i < Number(moveset[0]); i++) {
      const value = stacks[moveset[1]].pop();
      stacks[moveset[2]].push(value);
    }
  });

  const lastVals = stacks
    .map((arr: string[]) => {
      const value = arr.pop();
      return value;
    })
    .toString()
    .replace(/,/g, "");

  console.log(`Result Part 1: ${lastVals}`);
}

function partTwo(input: string[]) {
  const stacks = [
    [],
    ["N", "D", "M", "Q", "B", "P", "Z"],
    ["C", "L", "Z", "Q", "M", "D", "H", "V"],
    ["Q", "H", "R", "D", "V", "F", "Z", "G"],
    ["H", "G", "D", "F", "N"],
    ["N", "F", "Q"],
    ["D", "Q", "V", "Z", "F", "B", "T"],
    ["Q", "M", "T", "Z", "D", "V", "S", "H"],
    ["M", "G", "F", "P", "N", "Q"],
    ["B", "W", "R", "M"],
  ];
  const cleanInput = input.map((commando: string) =>
    commando
      .replace("move ", "")
      .replace("from ", "")
      .replace("to ", "")
      .split(" ")
  );

  cleanInput.forEach((moveset: string[]) => {
    const arr = stacks[moveset[1]];
    // get part that is going to be added to new arr
    const newArr = arr.slice(arr.length - Number(moveset[0]), arr.length);
    //slice of sub array
    arr.splice(arr.length - Number(moveset[0]), Number(moveset[0]));
    //append subarray
    stacks[moveset[2]].push(...newArr);
  });

  const lastVals = stacks
    .map((arr: string[]) => {
      const value = arr.pop();
      return value;
    })
    .toString()
    .replace(/,/g, "");

  console.log(`Result Part 2: ${lastVals}`);
}
