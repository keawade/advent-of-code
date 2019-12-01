import { readFileSync } from 'fs';

const calculateRequiredFuelForModule = (moduleMass: number) => {
  const requiredFuel = Math.floor(moduleMass / 3) - 2;

  if (requiredFuel <= 0) {
    return 0;
  }
  return requiredFuel + calculateRequiredFuelForModule(requiredFuel);
};

const requiredFuel = readFileSync('input.txt', { encoding: 'utf8' })
  .split('\n')
  .map(moduleMassString => Number(moduleMassString))
  .map(calculateRequiredFuelForModule)
  .reduce((sum, currentFuelRequired) => sum + currentFuelRequired, 0);

console.log(requiredFuel);
