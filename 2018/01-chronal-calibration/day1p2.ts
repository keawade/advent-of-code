import * as fs from 'fs';

const rawInput = fs.readFileSync('./input.txt').toString();
const input: [string, number][] = rawInput.split('\n').map((raw): [string, number] => ([raw[0], Number(raw.slice(1))]))

const frequencies = [];

let nextFrequency = 0;
let index = 0;
while (true) {
  const pos = index % input.length;
  nextFrequency = input[pos][0] === '+' ? nextFrequency + input[pos][1] : nextFrequency - input[pos][1];

  if (frequencies.indexOf(nextFrequency) > -1) {
    console.log('The actual frequency is:', nextFrequency);
    break;
  }

  frequencies.push(nextFrequency);
  index++;
}
