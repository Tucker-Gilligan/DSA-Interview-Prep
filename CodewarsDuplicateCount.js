/*==First solution - using a set ==*/
// const duplicateCount = myString => {
//   let newArray = myString.toLowerCase().split('');
//   let arraySet = [...new Set(newArray)];
//   let count = 0;
//   arraySet.forEach(item => newArray.splice(newArray.indexOf(item), 1));
//   arraySet.forEach(item => newArray.includes(item) && count++);
//   return count;
// };

/*second solution -  */
const duplicateCount = myString => {
  let newArray = myString.toLowerCase().split('');
  let counter = 0;
  let firstItem = '';
  while (newArray.length > 0) {
    firstItem = newArray[0]; //assign first item of array to "firstItem" variable
    newArray.splice(0, 1); //remove from array
    if (newArray.includes(firstItem)) {
      counter++;
      while (newArray.includes(firstItem)) {
        newArray.splice(newArray.indexOf(firstItem), 1);
      }
    }
  }
  return counter;
};

console.log('should be 0', duplicateCount('abcde')); //should return 0
console.log('should be 3', duplicateCount('babcacd')); //should return 3
console.log('should be 3', duplicateCount('AbcaBcabcabcabc')); //should return 3
console.log('should be 2', duplicateCount('Ab1cdfG199')); //should return 1
console.log('should be 2', duplicateCount('Indivisibilities')); //should return 1
