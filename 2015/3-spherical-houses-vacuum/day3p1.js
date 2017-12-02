var fs = require('fs')
var source = fs.readFileSync('./input.txt').toString()
var end = source.length

function onlyUnique (value, index, self) {
  return self.indexOf(value) === index
}

// [x, y]
var x = '0'
var y = '0'
var deliveries = ['0 0']
for (var i = 0; i < end - 1; i++) {
  if (source.charAt(i) === '^') {
    x++
  } else if (source.charAt(i) === '>') {
    y++
  } else if (source.charAt(i) === 'v') {
    x--
  } else if (source.charAt(i) === '<') {
    y--
  }
  deliveries.push(x + ' ' + y)
}

var unique = deliveries.filter(onlyUnique)

console.log('Santa delivered ' + unique.length + ' presents!')
