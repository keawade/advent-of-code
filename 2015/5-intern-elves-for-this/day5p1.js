var fs = require('fs')

var source = fs.readFileSync('../source/day5source.txt', 'utf8').toString().split('\n')

var niceStrings1 = source.filter(str => {
  var vowelMatch = str.match(/[aeiou]/g)
  return vowelMatch && vowelMatch.length >= 3 && str.match(/(\w)\1/) && !str.match(/ab|cd|pq|xy/)
})

console.log('There are ' + niceStrings1.length + ' nice strings. Yay!')
