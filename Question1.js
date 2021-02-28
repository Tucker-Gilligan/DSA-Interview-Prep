/* ===============================================================
1. Given a document, implement an algorithm to count the number of word occurrences.

- `Input: "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
- `Output: Hello = 1, there = 1, how = 2, are = 1, you = 2`
===============================================================*/
function countOccurrences(myString) {
  if (!myString) {
    return '0';
  }
  let original = myString.toLowerCase().split(' ');
  let compare = [...new Set(original)];
  let answerArray = [];
  for (let i = 0; i < compare.length; i++) {
    let tempArray = [];
    for (let j = 0; j < original.length; j++) {
      if (compare[i] === original[j]) {
        tempArray.push(original[j]);
      }
      if (!original[j + 1]) {
        answerArray.push(`${compare[i]} = ${tempArray.length}`);
      }
    }
  }
  return answerArray.join(', ');
}

/*====time complexity: O(n^2)====*/
console.log(countOccurrences('hello my name is Tucker my name is not cheese'));
console.log(countOccurrences('hi'));
console.log(countOccurrences(''));
console.log(
  countOccurrences(
    `Roxanne You dont have to put on the red light Those days are over You dont have to sell your body to the night Roxanne You dont have to wear that dress tonight Walk the streets for money You dont care if its wrong or if its right Roxanne You dont have to put on the red light Roxanne You dont have to put on the red light Roxanne Put on the red light Roxanne Put on the red light Roxanne Put on the red light Roxanne Put on the red light Roxanne Put on the red light I loved you since I knew you I wouldnt talk down to you I have to tell you just how I feel I wont share you with another boy I know my mind is made up So put away your make up Told you once I wont tell you again Its a bad way Roxanne You dont have to put on the red light Roxanne You dont have to put on the red light Roxanne You dont have to put on the red light Roxanne Put on the red light Roxanne Put on the red light Roxanne Put on the red light Roxanne Put on the red light Roxanne Put on the red light Roxanne Put on the red light Roxanne Put on the red light Roxanne Put on the red light Roxanne Put on the red light Roxanne You dont have to put on the red light Roxanne Put on the red light Roxanne Put on the red light Roxanne Put on the red light Roxanne Put on the red light`
  )
);
