/*
Write a function that takes an array of numbers and 
returns the greatest difference you can get 
by subtracting any two of those numbers.

For example, if our input is [5,8,6,1], 
the greatest difference we can get is 8-1, 
which is 7. So we should return 7.
*/
/* === With Sorting === */

function greatestDifference(numArray) {
  if (numArray.length === 0) {
    return 0;
  }
  numArray.sort((a, b) => a - b);
  return numArray[numArray.length - 1] - numArray[0];
}

/* === Without Sorting ===*/

// function greatestDifference(numArray) {
//   if (numArray.length === 0) {
//     return 0;
//   }
//   let highest = numArray[0];
//   let lowest = numArray[0];

//   numArray.forEach(item => {
//     if (item > highest) {
//       highest = item;
//     } else if (item < lowest) {
//       lowest = item;
//     }
//   });
//   return highest - lowest;
// }

//time complexity O(n)
console.log(greatestDifference([5, 8, 6, 1]), 'should be 7');
console.log(greatestDifference([5, 10, 20, 1]), 'should be 19');
console.log(greatestDifference([5, 10, -20, 1]), 'should be 30');
console.log(greatestDifference([5, 5, 5]), 'should be 0');
console.log(greatestDifference([]), 'should be 0');
