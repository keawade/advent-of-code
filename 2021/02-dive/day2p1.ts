import { readFileSync } from "fs";

interface Instruction {
  direction: "forward" | "up" | "down";
  units: number;
}

interface Position {
  horizontal: Number;
  depth: Number;
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

const finalPosition = instructionSet.reduce(
  ({ horizontal, depth }, { direction, units }) => {
    switch (direction) {
      case "forward":
        return {
          horizontal: horizontal + units,
          depth,
        };

      case "up":
        return {
          horizontal,
          depth: depth - units,
        };

      case "down":
        return {
          horizontal,
          depth: depth + units,
        };
    }
  },
  {
    horizontal: 0,
    depth: 0,
  }
);

console.log("Final position", finalPosition);
console.log("Answer", finalPosition.horizontal * finalPosition.depth);
