const LinkedList = require('./LinkedList');
// const Node = require('./LinkedList');
/*5. Given 2 linked lists, where each node in each linked list represents a character in a string, 
write a function compare() that compares the 2 strings, i.e., it returns 0 if both strings are the same, 
1 if the 1st linked list is lexicographically greater, and -1 if the 2nd string is lexicographically greater.

- Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o`
- Output: `1`

- Input: `list 1: B->i->l->b->o, list 2: B->i->l->b->o`
- Output: `0`

- Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o->b`
- Output: `-1`

*/

/*== Solution 1: with a LinkedList ==*/
const SLL = new LinkedList();
function constructSLL(string) {
  let stringArray = string.split('');
  return stringArray.map(letter => SLL.insertLast(letter));
}

const SLL2 = new LinkedList();
function constructSLL2(string) {
  let stringArray = string.split('');
  return stringArray.map(letter => SLL2.insertLast(letter));
}

// console.dir(SLL, { depth: null });
// console.dir(SLL2, { depth: null });

function compareStrings(list1, list2) {
  let currentNode1 = list1.head;
  let currentNode2 = list2.head;
  while (currentNode1 !== null && currentNode2 !== null) {
    if (currentNode1.value === currentNode2.value) {
      currentNode1 = currentNode1.next;
      currentNode2 = currentNode2.next;
    } else if (currentNode1.value > currentNode2.value) {
      return 1;
    } else if (currentNode1.value < currentNode2.value) {
      return -1;
    }
  }
  if (currentNode1 === null && currentNode2 !== null) {
    return -1;
  } else if (currentNode1 !== null && currentNode2 === null) {
    return 1;
  }
  return 0;
}

/*======== time complexity O(n) ========*/
/*======== comment out each block below for testing ========*/

constructSLL('Bilboa');
constructSLL2('Bilboa');
console.log(compareStrings(SLL, SLL2), 'should be 0');

// constructSLL('Bilboa');
// constructSLL2('Bilbob');
// console.log(compareStrings(SLL, SLL2), 'should be -1');

// constructSLL('Bilbo');
// constructSLL2('Bilboa');
// console.log(compareStrings(SLL, SLL2), 'should be -1');

// constructSLL('Bilboa');
// constructSLL2('Bilbo');
// console.log(compareStrings(SLL, SLL2), 'should be 1');

// constructSLL('Bilbob');
// constructSLL2('Bilboa');
// console.log(compareStrings(SLL, SLL2), 'should be 1');

/* === Solution 2: No linked list === */

// // function compareStrings(string1, string2) {
// //   if (string1 === string2) {
// //     return 0;
// //   } else if (string1 > string2) {
// //     return 1;
// //   } else if (string1 < string2) {
// //     return -1;
// //   }
// // }

/*======== time complexity O(2) ========*/

// // console.log(compareStrings('bilboa', 'bilbo'), 'should be 1');
// // console.log(compareStrings('bilbo', 'bilbo'), 'should be 0');
// // console.log(compareStrings('bilboa', 'bilbob'), 'should be -1');
