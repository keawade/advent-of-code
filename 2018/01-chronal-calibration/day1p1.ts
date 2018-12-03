import * as fs from 'fs';

const rawInput = fs.readFileSync('./input.txt').toString();
const input: [string, number][] = rawInput.split('\n').map((raw): [string, number] => ([raw[0], Number(raw.slice(1))]))

const initialFrequency = 0;

const frequency = input.reduce((prev, curr) => (
  curr[0] === '+' ? prev + curr[1] : prev - curr[1]
), 0)

console.log(frequency);
