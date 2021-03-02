/* ===============================================================
1. Given a document, implement an algorithm to count the number of word occurrences.

- `Input: "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
- `Output: Hello = 1, there = 1, how = 2, are = 1, you = 2`
===============================================================*/
// function countOccurrences(myString) {
//   //validate that the string is not empty
//   //if the string is empty, respond with a string of '0'
//   let myArray = myString.toLowerCase().split(' ');
//   let comparisonArray = [];
//   //populate comparison array with each word, with no repeats :)
//   myArray.forEach(item => {
//     if (!comparisonArray.includes(item)) {
//       comparisonArray.push(item);
//     }
//   });
//   let answerArray = [];
//   for (let i = 0; i < comparisonArray.length; i++) {
//     //let tempArray = [];
//     let count = 0;
//     for (let j = 0; j < myArray.length; j++) {
//       if (comparisonArray[i] === myArray[j]) {
//         //tempArray.push(myArray[j]);
//       }
//       if (!myArray[j + 1]) answerArray.push(`${comparisonArray[i]} = ${count}`);
//     }
//   }
//   return answerArray.join(', ');
//   //compare our array
//   //define a new array, to compare the amount of words
// }

function countOccurrences(myString, answerArray = []) {
  if (myString.length === 0) {
    return answerArray;
  }
  let myArray = myString.toLowerCase().split(' ');
  let comparisonArray = [...new Set(myArray)];
  let comparisonWord = comparisonArray[0];
  comparisonArray.splice(0, 1);
  let matches = myArray.filter(str => str === comparisonWord);
  myArray.forEach(
    word => word === comparisonWord && myArray.splice(myArray.indexOf(word), 1)
  );
  answerArray.push(`${comparisonWord} = ${matches.length}`);
  countOccurrences(myArray.join(' '), answerArray);
  return answerArray.join(', ');
}

// function countOccurrences(myString) {
//   if (!myString) {
//     return '0';
//   }
//   let original = myString.toLowerCase().split(' ');
//   let compare = [...new Set(original)];
//   let answerArray = [];
//   for (let i = 0; i < compare.length; i++) {
//     let tempArray = [];
//     for (let j = 0; j < original.length; j++) {
//       if (compare[i] === original[j]) {
//         tempArray.push(original[j]);
//       }
//       if (!original[j + 1]) {
//         answerArray.push(`${compare[i]} = ${tempArray.length}`);
//       }
//     }
//   }
//   return answerArray.join(', ');
// }

/*====time complexity: O(n^2)====*/

console.log(countOccurrences('hello my name is Tucker my name is not cheese'));
console.log(countOccurrences('hi', (counter = 0)));
console.log(countOccurrences(''));
console.log(
  countOccurrences(
    'Aint no sunshine when shes gone Its not warm when shes away Aint no sunshine when shes gone And shes always gone too long Anytime shes goes away Wonder this time where shes gone Wonder if shes gone to stay Aint no sunshine when shes gone And this house just aint no home Anytime she goes away And I know I know I know I know I know I know I know I know I know I know I know I know I know I know I know I know I know I know I know I know I know I know I know I know I know I know Hey I oughta leave young thing alone But aint no sunshine when shes gone woh woh Aint no sunshine when shes gone Only darkness every day Aint no sunshine when shes gone And this house just aint no home Anytime she goes away Anytime she goes away Anytime she goes away Anytime she goes away'
  )
);

console.log(countOccurrences('hello&my&name&is&tucker'));
