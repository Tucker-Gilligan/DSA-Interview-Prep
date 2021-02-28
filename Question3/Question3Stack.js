class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    //if stack is empty, node will be the top of the stack
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    //if the stack already has something, create a new node
    //add data to the new node and have the pointer point to the top
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    /*in order to remove the top of the stack, 
          you have to pint the pointer to the next item 
          and that next item becomes the top of the stack */
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

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
