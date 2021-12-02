import { readFileSync } from "fs";

const depthMeasurements = readFileSync("./input.txt", { encoding: "utf-8" })
  .split("\n")
  .map((str) => parseInt(str, 10));

interface Accumulator {
  previousMeasurement?: number;
  depthIncreases: number;
}

const { depthIncreases } = depthMeasurements.reduce<Accumulator>(
  (accumulator, currentDepth) => {
    if (
      accumulator.previousMeasurement !== undefined &&
      currentDepth > accumulator.previousMeasurement
    ) {
      return {
        previousMeasurement: currentDepth,
        depthIncreases: accumulator.depthIncreases + 1,
      };
    }

    return {
      previousMeasurement: currentDepth,
      depthIncreases: accumulator.depthIncreases,
    };
  },
  {
    previousMeasurement: undefined,
    depthIncreases: 0,
  }
);

console.log("Depth increases:", depthIncreases);
