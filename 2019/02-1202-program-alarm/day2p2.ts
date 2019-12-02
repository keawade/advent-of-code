import { readFileSync } from 'fs';

const prepareInput = (input: string) =>
  input.split(',').map(str => Number(str));

const exe = (initialState: number[]): number => {
  let memory = initialState.map(val => val);

  for (
    let instructionPointer = 0;
    instructionPointer < memory.length;
    instructionPointer += 4
  ) {
    const opcode = memory[instructionPointer];
    const param1 = memory[instructionPointer + 1];
    const param2 = memory[instructionPointer + 2];
    const param3 = memory[instructionPointer + 3];

    switch (opcode) {
      case 1:
        memory[param3] = memory[param1] + memory[param2];
        break;
      case 2:
        memory[param3] = memory[param1] * memory[param2];
        break;
      case 99:
        return memory[0];
      default:
        throw new Error(
          `Unrecognized opcode '${opcode}' found at position ${instructionPointer}`
        );
    }
  }
};

const gravityAssistProgram: string = readFileSync('input.txt', {
  encoding: 'utf8'
});

const setInputs = (
  program: number[],
  param1: number,
  param2: number
): number[] => {
  const initialState = program.map(val => val);
  initialState[1] = param1;
  initialState[2] = param2;

  return initialState;
};

const bruteForceIt = (desiredOutput = 19690720, limit = 100) => {
  let output = 0;

  for (let param1 = 0; param1 < limit; param1++) {
    for (let param2 = 0; param2 < limit; param2++) {
      const result = exe(
        setInputs(prepareInput(gravityAssistProgram), param1, param2)
      );

      if (result === desiredOutput) {
        return [param1, param2];
      }
    }
  }

  throw new Error('Did not find a suitable input! Try increasing the limit?');
};

console.log(bruteForceIt());
