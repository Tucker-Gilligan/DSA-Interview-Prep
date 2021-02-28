// const LinkedList = require('./LinkedList');
// /*===============================================================
// 2. Given a sorted linked list, write an algorithm to delete
// all duplicate numbers from the sorted linked list.
// ===============================================================*/

/*===SOLUTION 1 - WITH A LINKED LIST===*/

const SLL = new LinkedList();
function constructSortedSLL(myArray) {
  myArray.sort((a, b) => a - b);
  return myArray.map(letter => SLL.insertLast(letter));
}

function deleteDuplicates(numbers) {
  previousNode = numbers.head;
  nextNode = numbers.head.next;
  while (previousNode.next !== null) {
    if (previousNode.value === nextNode.value) {
      previousNode.next = nextNode.next;
      nextNode = nextNode.next;
    } else {
      previousNode = previousNode.next;
      nextNode = nextNode.next;
    }
  }
  return numbers;
}

constructSortedSLL([9, 5, 6, 8, 10, 100, 1, 5, 99, 5, 6, 99, 5, 6, 10, 5]);
console.dir(deleteDuplicates(SLL), { depth: null });

/*==SOLUTION 2: WITH AN ARRAY==*/

// const deleteDuplicates = myArray => {
//   for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] === myArray[i + 1]) {
//       myArray.splice(i, 1);
//       deleteDuplicates(myArray);
//     }
//   }
//   return myArray;
// };

// console.log(
//   'deleting duplicates :)',
//   deleteDuplicates([1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9])
// );

/*==SOLUTION 3 - WITH A SET ==*/
// function deleteDuplicates(myArray) {
//   return [...new Set(myArray)];
// }

// console.log(
//   deleteDuplicates([
//     1,
//     3,
//     4,
//     5,
//     6,
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     9,
//     10,
//     10,
//     10,
//     3,
//     5,
//     5,
//     4,
//     3,
//     2,
//     1,
//     5,
//     3,
//     2,
//     1,
//     5,
//     4,
//     3,
//     2,
//     1,
//   ])
// );
