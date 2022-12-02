import { promises as fsPromises, readFileSync } from "fs";
import { join } from "path";
import { day1 } from "./days/day1";
import { day2 } from "./days/day2";

const file = readFileSync(join(__dirname, "./input.txt"), "utf-8").trimEnd();
// const input = file
//   .split("\n")
//   .map((n) => String(n));

// Run day
// day1(input);
day2(file);
