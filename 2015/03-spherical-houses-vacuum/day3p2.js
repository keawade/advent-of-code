var fs = require('fs')
var source = fs.readFileSync('./input.txt').toString()
var end = source.length

function onlyUnique (value, index, self) {
  return self.indexOf(value) === index
}

// [x, y]
var x = '0'
var y = '0'
var rx = '0'
var ry = '0'
var deliveries = ['0 0']
for (var i = 0; i < end - 1; i++) {
  if (i % 2 === 0) {
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
  } else {
    if (source.charAt(i) === '^') {
      rx++
    } else if (source.charAt(i) === '>') {
      ry++
    } else if (source.charAt(i) === 'v') {
      rx--
    } else if (source.charAt(i) === '<') {
      ry--
    }
    deliveries.push(rx + ' ' + ry)
  }
}

var unique = deliveries.filter(onlyUnique)

console.log('Santa and Robo-Santa delivered ' + unique.length + ' presents!')
