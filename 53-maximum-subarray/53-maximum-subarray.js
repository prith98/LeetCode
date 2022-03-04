/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(A) {
  //var prev = 0;
  //var max = -Number.MAX_VALUE;
  var dpArray = [];

  for (var i = 0; i < A.length; i++) {
     if(i === 0) {
        dpArray.push(A[i]);
     } else {
        dpArray[i] = Math.max(dpArray[i-1] + A[i], A[i])
    }
  }
  //return max;
  return Math.max(...dpArray); // returns max value in this array
}