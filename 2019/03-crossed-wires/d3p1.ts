import { readFileSync } from 'fs';

const rawInput = readFileSync('input.txt', { encoding: 'utf8' });

const mapWire = (
  wire: Array<{ direction: string; distance: number }>
): Array<{ x: number; y: number }> => {
  const coordinates = [{ x: 0, y: 0 }];
  let lastCoordinates = coordinates[0];

  wire.forEach(instruction => {
    for (let i = 0; i < instruction.distance; i++) {
      let nextCoordinates = { ...lastCoordinates };
      switch (instruction.direction.toLowerCase()) {
        case 'u':
          nextCoordinates.y++;
          break;
        case 'd':
          nextCoordinates.y--;
          break;
        case 'r':
          nextCoordinates.x++;
          break;
        case 'l':
          nextCoordinates.x--;
          break;
      }
      lastCoordinates = nextCoordinates;
      coordinates.push(nextCoordinates);
    }
  });

  return coordinates;
};

const [wire1, wire2] = rawInput.split('\n').map(rawWire =>
  rawWire.split(',').map(instruction => {
    const [direction, distance] = instruction.match(/(.{1,1})(.*)/).slice(1);
    return {
      direction,
      distance: Number(distance)
    };
  })
);
console.log('wires');

const serializeCoords = ({ x, y }: { x: number; y: number }) => `${x},${y}`;

const map1 = mapWire(wire1).map(serializeCoords);
const map2 = mapWire(wire2).map(serializeCoords);
console.log('maps');

const intersections = map1.filter(coord => map2.includes(coord));
console.log('intersections', intersections);

const distances = intersections
  .map(intersection => {
    const [x, y] = intersection.split(',');
    return Math.abs(Number(x)) + Math.abs(Number(y));
  })
  .sort();
console.log('distances', distances);
