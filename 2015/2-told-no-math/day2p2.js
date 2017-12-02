var fs = require('fs')

var source = fs.readFileSync('../source/day2source.txt').toString().split('\n')
var end = source.length
var total = 0
for (var i = 0; i < end - 1; i++) {
  var tempDim = source[i].split('x')
  var s1 = Number(tempDim[0])
  var s2 = Number(tempDim[1])
  var s3 = Number(tempDim[2])
  //console.log('tempDim1 = %s; tempDim2 = %s; tempDim3 = %s; ', tempDim[0], tempDim[1], tempDim[2]);
  var smallest = 0
  var nextSmallest = 0

  if (s1 > s2) {
    if (s2 > s3) {
      smallest = s3
      nextSmallest = s2
    } else {
      smallest = s2
      if (s1 > s3) {
        nextSmallest = s3
      } else {
        nextSmallest = s1
      }
    }
  } else {
    if (s1 > s3) {
      smallest = s3
      nextSmallest = s1
    } else {
      smallest = s1
      if (s2 > s3) {
        nextSmallest = s3
      } else {
        nextSmallest = s2
      }
    }
  }

  total = total + (smallest * 2) + (nextSmallest * 2) + (s1 * s2 * s3)
}

console.log('The elves need to order ' + total + ' feet of ribbon.')
