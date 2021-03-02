const LinkedList = require('./LinkedList');
// /*===============================================================
// 2. Given a sorted linked list, write an algorithm to delete
// all duplicate numbers from the sorted linked list.
// ===============================================================*/

/*===SOLUTION 1 - WITH A LINKED LIST===*/

const SLL = new LinkedList();

//construct the linked list
function constructSortedSLL(myArray) {
  myArray.sort((a, b) => a - b);
  return myArray.map(letter => SLL.insertLast(letter));
}

function deleteDuplicates(numbers) {
  // current node
  let currentNode = numbers.head;

  // next node
  let nextNode = numbers.head.next;

  // while we are not on the last item of the list
  while (currentNode.next !== null) {
    // check if our current node's value is equal to the next node's value
    if (currentNode.value === nextNode.value) {
      // if it is, assign the currentNode's next value
      console.log(currentNode, 'CURRENT NODE BEFORE MUTATION');
      currentNode.next = nextNode.next;
      console.log(currentNode, 'CURRENT NODE AFTER MUTATION');
      // to be the nextNode's next value
      nextNode = nextNode.next;
    }
    // if it it is not a match
    else {
      // currentNode = currentNode.next (move the pointer)
      currentNode = currentNode.next;
      // nextNode = nextNode.next (move the pointer)
      nextNode = nextNode.next;
    }
  }
  return numbers;
}

//[1(next=2), 2(next=3), 3(next=4), 4(next=null)]

// [
//  1(current=1)(next=1),
//  1(current=1)(next=2),
//  2(current=2(next=3),
//  3(current=3)(next=4),
//  4(current=4)(next=null)
//  ]

constructSortedSLL([9, 5, 6, 8, 10, 100, 1, 5, 99, 5, 6, 99, 5, 6, 10, 5]);
console.dir(deleteDuplicates(SLL), { depth: null });

// function deleteDuplicates(numbers) {
//   //this is actually currentNode
//   previousNode = numbers.head;

//   //currentNextNode
//   nextNode = numbers.head.next;

//   //while we are within the list(the next item in the list is not null)
//   while (previousNode.next !== null) {
//     if (previousNode.value === nextNode.value) {
//       previousNode.next = nextNode.next;
//       nextNode = nextNode.next;
//     } else {
//       previousNode = previousNode.next;
//       nextNode = nextNode.next;
//     }
//   }
//   return numbers;
// }

// constructSortedSLL([9, 5, 6, 8, 10, 100, 1, 5, 99, 5, 6, 99, 5, 6, 10, 5]);
// // console.dir(deleteDuplicates(SLL), { depth: null });

// /*==SOLUTION 2: WITH AN ARRAY==*/

// // const deleteDuplicates = myArray => {
// //   for (let i = 0; i < myArray.length; i++) {
// //     if (myArray[i] === myArray[i + 1]) {
// //       myArray.splice(i, 1);
// //       deleteDuplicates(myArray);
// //     }
// //   }
// //   return myArray;
// // };

// // console.log(
// //   'deleting duplicates :)',
// //   deleteDuplicates([1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9])
// // );

// /*==SOLUTION 3 - WITH A SET ==*/
// // function deleteDuplicates(myArray) {
// //   return [...new Set(myArray)];
// // }

// // console.log(
// //   deleteDuplicates([
// //     1,
// //     3,
// //     4,
// //     5,
// //     6,
// //     1,
// //     2,
// //     3,
// //     4,
// //     5,
// //     6,
// //     7,
// //     9,
// //     10,
// //     10,
// //     10,
// //     3,
// //     5,
// //     5,
// //     4,
// //     3,
// //     2,
// //     1,
// //     5,
// //     3,
// //     2,
// //     1,
// //     5,
// //     4,
// //     3,
// //     2,
// //     1,
// //   ])
// // );

// //[0, 1, 2, 3, 4, 5, 6, 7]

// /*

//                   0
//                     1
//                        2
//                           3
//                             4
//                               5
//                                 6
//                                   7
// //[4, 2, 3, 5, 6, 7]
//                        4
//                 2             5
//                    3            6
//                                   7

// //4, 3, 2, 6, 7, 5
//                   4
//               3       6
//            2      5       7
// //

//                                   */
