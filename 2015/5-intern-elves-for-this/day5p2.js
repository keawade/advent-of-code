var fs = require('fs')

var source = fs.readFileSync('./input.txt', 'utf8').toString().split('\n')

var niceStrings2 = source.filter(str => {
  return str.match(/(\w\w)\w*\1/) && str.match(/(\w)\w\1/)
})

console.log('There are ' + niceStrings2.length + ' nice strings. Yay!')
