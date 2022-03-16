/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  
  const heightsCopy = [...heights]

  function bubbleSort(arr, counter) {
    
    let sorted = true;
    
    for (let i = 0; i < heights.length - 1; i++) {
      if (heights[i] > heights[i + 1]) {
        [heights[i], heights[i + 1]] = [heights[i + 1], heights[i]];
        counter++;
        sorted = false;
      }
    }
    
    if (sorted === true) {
      return arr;
    } else {
      return bubbleSort(arr, counter);
    }
    
  }
  
  let expected = bubbleSort(heights, 0)
  let finalCounter = 0;
  for (let i = 0; i < heightsCopy.length; i++) {
    console.log(heightsCopy[i], expected[i])
    if (heightsCopy[i] !== expected[i]) {
      finalCounter++;
    }
  }
  
  return finalCounter;
  
};