import { readFileSync } from 'fs';

const prepareInput = (input: string) =>
  input.split(',').map(str => Number(str));

const exe = (input: number[]): number[] => {
  let program = input.map(val => val);

  for (let i = 0; i < program.length; i += 4) {
    const opcode = program[i];
    const param1 = program[i + 1];
    const param2 = program[i + 2];
    const dest = program[i + 3];

    switch (opcode) {
      case 1:
        program[dest] = program[param1] + program[param2];
        break;
      case 2:
        program[dest] = program[param1] * program[param2];
        break;
      case 99:
        return program;
      default:
        throw new Error(
          `Unrecognized opcode '${opcode}' found at position ${i}`
        );
    }
  }
};

const gravityAssistProgram: string = readFileSync('input.txt', {
  encoding: 'utf8'
});

const replicateAlarmState = (program: number[]): number[] => {
  const alarmState = program.map(val => val);
  alarmState[1] = 12;
  alarmState[2] = 2;

  return alarmState;
};

// const inputs = [
//   prepareInput('1,0,0,0,99'),
//   prepareInput('2,3,0,3,99'),
//   prepareInput('2,4,4,5,99,0'),
//   prepareInput('1,1,1,4,99,5,6,0,99'),
//   prepareInput('1,9,10,3,2,3,11,0,99,30,40,50'),
// ];

// inputs.map(exe).map(result => console.log(result));

console.log(exe(replicateAlarmState(prepareInput(gravityAssistProgram)))[0]);
