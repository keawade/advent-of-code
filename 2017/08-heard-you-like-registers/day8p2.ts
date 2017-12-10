/// <reference path="./node_modules/@types/node/index.d.ts" />
import * as fs from 'fs';

const input = fs.readFileSync('./input.txt').toString().split('\n').map(l => l.split(' '));

const register = {};
let largest = 0;

input.map((instruction, index) => {
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

  if (register[instruction[0]] > largest) {
    largest = register[instruction[0]];
  }
});

console.log(largest);
