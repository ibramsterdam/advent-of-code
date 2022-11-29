import { promises as fsPromises, readFileSync } from "fs";
import { join } from "path";
import { day1 } from "./days/day1";

const file = readFileSync(join(__dirname, "./input.txt"), "utf-8");
const input = file
  .split("\n")
  .slice(0, -1)
  .map((n) => Number(n));

// Run day
day1(input);
