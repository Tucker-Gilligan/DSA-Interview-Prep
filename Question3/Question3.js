/*
3. Given a string, write an algorithm to count the number of words in the string that are palindromes. 
The output must include a list of the palindromes and the number of palindromes.

- Input: `"Dad gave mom a Tesla as a racecar"`
- Output: `Dad, mom, racecar, 3 Palindromes`
*/

function howManyPalindromes(sentence) {
  let wordArray = sentence
    .toLowerCase()
    .replace(/[^a-zA-Z]/g, ' ')
    .split(' ');

  let palindromeWords = wordArray.filter(
    word => word.length > 1 && word.split('').reverse().join('') === word
  );

  palindromeWords = [...new Set(palindromeWords)];

  return `${palindromeWords.map(word => ` ${word}`)}, ${
    palindromeWords.length
  } words`;
}

console.log(howManyPalindromes('Dad gave mom a Tesla as a racecar'));
console.log(
  howManyPalindromes('you are a dirty trashcan full of poop and racecar LOL')
);
