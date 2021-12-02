import { readFileSync } from "fs";

interface Instruction {
  direction: "forward" | "up" | "down";
  units: number;
}

interface PositionAndBearing {
  horizontal: number;
  depth: number;
  aim: number;
}

const instructionSet = readFileSync("./input.txt", {
  encoding: "utf-8",
})
  .split("\n")
  .map((instruction) => instruction.split(" "))
  .map(
    (instruction) =>
      ({
        direction: instruction[0],
        units: parseInt(instruction[1]),
      } as Instruction)
  );

const finalPositionAndBearing = instructionSet.reduce<PositionAndBearing>(
  ({ horizontal, depth, aim }, { direction, units }) => {
    switch (direction) {
      case "forward":
        return {
          horizontal: horizontal + units,
          depth: depth + units * aim,
          aim,
        };

      case "up":
        return {
          horizontal,
          depth,
          aim: aim - units,
        };

      case "down":
        return {
          horizontal,
          depth,
          aim: aim + units,
        };
    }
  },
  {
    horizontal: 0,
    depth: 0,
    aim: 0,
  }
);

console.log("Final position", finalPositionAndBearing);
console.log(
  "Answer",
  finalPositionAndBearing.horizontal * finalPositionAndBearing.depth
);
