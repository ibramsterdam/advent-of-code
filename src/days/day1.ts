export function day1(input) {
  partOne(input);
}

function partOne(input: number[]) {
  let calories = 0;

  let sortedCalorieIntake = input
    .map((food: number) => {
      calories += Number(food);

      if (Number(food) === 0) {
        const _calories = calories;
        calories = 0;
        return _calories;
      }
      return -1;
    })
    .filter((number) => number !== -1)
    .sort(function (a, b) {
      return b - a;
    });

  console.log(`Result Part 1: ${sortedCalorieIntake[0]}`);
  partTwo(sortedCalorieIntake);
}

function partTwo(input: number[]) {
  console.log(`Result Part 2: ${input[0] + input[1] + input[2]}`);
}
