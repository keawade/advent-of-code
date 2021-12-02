import { readFileSync } from "fs";

const depthMeasurements = readFileSync("./input.txt", { encoding: "utf-8" })
  .split("\n")
  .map((str) => parseInt(str, 10));

interface Accumulator {
  previousMeasurement?: number;
  depthIncreases: number;
}

const { depthIncreases } = depthMeasurements.reduce<Accumulator>(
  (accumulator, _, currentIndex, arr) => {
    if (currentIndex + 2 > arr.length - 1) {
      return accumulator;
    }

    const sumOfWindow = arr
      .slice(currentIndex, currentIndex + 3) // window
      .reduce((acc, curr) => acc + curr, 0); // sum

    if (
      accumulator.previousMeasurement !== undefined &&
      sumOfWindow > accumulator.previousMeasurement
    ) {
      return {
        previousMeasurement: sumOfWindow,
        depthIncreases: accumulator.depthIncreases + 1,
      };
    }

    return {
      previousMeasurement: sumOfWindow,
      depthIncreases: accumulator.depthIncreases,
    };
  },
  {
    previousMeasurement: undefined,
    depthIncreases: 0,
  }
);

console.log("Depth increases:", depthIncreases);
