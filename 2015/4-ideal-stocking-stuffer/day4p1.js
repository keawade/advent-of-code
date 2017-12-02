const md5 = require('md5');
const leftpad = require('leftpad');

const mineAdventCoin = (part1) => {
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

    if (output.slice(0,5) === '00000') {
      return part2;
    } else {
      i++;
    }
  }
};

const value = mineAdventCoin('bgvyzdsv');
console.log(value);
