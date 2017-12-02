var fs = require('fs')

var source = fs.readFileSync('./input.txt').toString()
var end = source.length
var floor = 1
for (var i = 0; i < end; i++) {
  if (source.charAt(i) === '(') {
    floor++
  } else {
    floor--
  }
}
console.log('Santa ends up on floor ' + floor + '.')
