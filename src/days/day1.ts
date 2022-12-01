export function day1(input) {
  partOne(input);
}

function partOne(input: number[]) {
  let totalCalories = 0;

  const sortedCalorieIntake = input
    .map((calories: number) => {
      totalCalories += calories;

      if (calories === 0) {
        const _totalCalories = totalCalories;
        totalCalories = 0;
        return _totalCalories;
      }
      return -1;
    })
    .filter((calories) => calories !== -1)
    .sort(function (a, b) {
      return b - a;
    });

  console.log(`Result Part 1: ${sortedCalorieIntake[0]}`);
  partTwo(sortedCalorieIntake);
}

function partTwo(input: number[]) {
  console.log(`Result Part 2: ${input[0] + input[1] + input[2]}`);
}
