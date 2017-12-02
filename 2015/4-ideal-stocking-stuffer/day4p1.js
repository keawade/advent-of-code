const md5 = require('md5');
const leftpad = require('leftpad');

const mineAdventCoin = (part1, firstdigits) => {
  let i = 0;
  let output;
  
  while (true) {
    let part2 = leftpad(i, 5);
    // console.log(part2);
    if (part2 > '999999') {
      return false;
    }

    const key = part1 + part2;
    output = md5(key);

    if (output.slice(0, firstdigits.length) === firstdigits) {
      return part2;
    } else {
      i++;
    }
  }
};

console.log('00000', mineAdventCoin('bgvyzdsv', '00000'));
console.log('000000', mineAdventCoin('bgvyzdsv', '000000'));
