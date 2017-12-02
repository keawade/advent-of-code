var fs = require('fs')

var source = fs.readFileSync('../source/day1source.txt').toString()
var end = source.length
var floor = 1
for (var i = 0; i < end; i++) {
  if (source.charAt(i) === '(') {
    floor++
  } else {
    floor--
  }
  if (floor === -1) {
    console.log('The character ' + source.charAt(i) + ' at position ' + i + ' sent santa to the basement.')
  }
}
