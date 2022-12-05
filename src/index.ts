import { promises as fsPromises, readFileSync } from "fs";
import { join } from "path";
import { day4 } from "./days/day4";
import { day5 } from "./days/day5";

const file = readFileSync(join(__dirname, "./input.txt"), "utf-8").trimEnd();
// const input = file
//   .split("\n")
//   .map((n) => String(n));

// Run day
day5(file);
