/// <reference path="./node_modules/@types/node/index.d.ts" />
import * as fs from 'fs';

const input = fs.readFileSync('./input.txt').toString().split('\n').map(l => l.split(' '));

const register = {};

input.map((instruction: string[], index) => {
  // Initialize registers
  if (register[instruction[0]] === undefined) {
    register[instruction[0]] = 0;
  }
  if (register[instruction[4]] === undefined) {
    register[instruction[4]] = 0;
  }

  // Construct statement to evaluate
  const statement = [register[instruction[4]], ...instruction.slice(5)].join(' ');

  // If eval to true
  if (eval(statement)) {
    // Check instruction 1 for 'inc' or 'dec'
    if (instruction[1] === 'inc') {
      register[instruction[0]] += Number(instruction[2]);
    } else {
      register[instruction[0]] -= Number(instruction[2]);
    }
  }
});

const largest = Math.max(...Object.keys(register).map((key) => (register[key])));

console.log(largest);
