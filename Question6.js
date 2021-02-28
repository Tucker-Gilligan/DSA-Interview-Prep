/*
6. Given a list of integers find the mode and the frequency of the mode. 
The mode in a list of numbers is the value that occurs the most often. 
If no number in the list is repeated, then there is no mode for the list.

- Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
- Output: `Mode = 3, Frequency of mode = 4`
*/

// function frequencyMode(numArray) {
//   let counter = 0;
//   let mostFrequent;
//   for (let i = 0; i < numArray.length; i++) {
//     console.log(numArray[i], 'numArray[i]');
//     let tempCounter = 0;
//     for (let j = 0; j < numArray.length; j++) {
//       console.log(numArray[j], 'numArray[j]');
//       if (numArray[j] === numArray[i]) {
//         tempCounter++;
//       }
//       if (tempCounter > counter) {
//         counter = tempCounter;
//         mostFrequent = numArray[i];
//       }
//     }
//   }
//   return `Mode = ${mostFrequent}, Frequency of mode = ${counter}`;
// }

console.log(
  frequencyMode([1, 2, 3, 6, 10, 3, 5, 6, 3, 3]),
  `should be Mode = 3, Frequency of mode = 4`
);

/* ==== Please help me figure out why the function below is not working :( This function is the sad path ====*/
//It keeps running and changes count to 0 after hitting the base case

// function frequencyMode(myArray, count = 0) {
//   console.log('count', count);
//   //   if (!count) {
//   //     console.log('making count 0');
//   //     count = 0;
//   //   }
//   if (myArray.length === 0) {
//     console.log('we hit our base case!');
//     return 'count';
//   }
//   let testNum = myArray[0];
//   myArray.splice(0, 1);
//   let tempCount = 0;

//   myArray.forEach(item => {
//     item === testNum && tempCount++;
//     if (tempCount > count) {
//       count = tempCount;
//     } else {
//       count = count;
//     }
//   });

//   frequencyMode(myArray, count);
//   return count + 1;
// }
