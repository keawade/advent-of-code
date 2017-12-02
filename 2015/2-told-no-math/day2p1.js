var fs = require('fs')

var source = fs.readFileSync('../source/day2source.txt').toString().split('\n')
var end = source.length
var total = 0
for (var i = 0; i < end - 1; i++) {
  var tempDim = source[i].split('x')
  var s1 = Number(tempDim[0]) * Number(tempDim[1])
  var s2 = Number(tempDim[2]) * Number(tempDim[1])
  var s3 = Number(tempDim[0]) * Number(tempDim[2])
//  console.log('tempDim1 = %s; tempDim2 = %s; tempDim3 = %s; ', tempDim[0], tempDim[1], tempDim[2]);
  var smallest = 0

  if (s1 > s2) {
    if (s2 > s3) {
      smallest = s3
    } else {
      smallest = s2
    }
  } else {
    if (s1 > s3) {
      smallest = s3
    } else {
      smallest = s1
    }
  }

  total = total + (2 * s1 + 2 * s2 + 2 * s3 + smallest)
}

console.log('The elves need to order ' + total + ' square feet of wrapping paper.')
