const Stack = require('./Stack');

/*
3. Given a string, write an algorithm to count the number of words in the string that are palindromes. 
The output must include a list of the palindromes and the number of palindromes.

- Input: `"Dad gave mom a Tesla as a racecar"`
- Output: `Dad, mom, racecar, 3 Palindromes`
*/

function isPalindrome(myString) {
  myString = myString.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let palindromeStack = new Stack();
  let splitString = myString.split('');
  let stackLength = splitString.length;
  let forwardResults = '';

  //for each character in the array, push each character into the palindrome stack
  splitString.forEach(char => palindromeStack.push(char));
  //loop through the stack, remove items (pop) into a new array.
  //stacks start at the top so i will decrement
  for (let i = stackLength; i > 0; i--) {
    forwardResults += palindromeStack.pop();
  }
  if (myString === forwardResults) {
    console.log(`${myString} is a palindrome`, myString === forwardResults);
    return myString;
  }
  // console.log(`${myString} is a palindrome`, myString === forwardResults);
}

// hello
// olleh

function howManyPalindromes(myString) {
  let newArray = myString.split(' ');
  let palindromeArray = [];
  newArray.map(word => {
    if (isPalindrome(word)) {
      palindromeArray.push(word);
    }
  });
  return `${palindromeArray.join(', ')}, ${palindromeArray.length} palindromes`;
}

console.log(howManyPalindromes('Mom is not dad or racecar'));
