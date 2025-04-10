// Research
// 1. some() Method
//  this method is used to check if at least one element in an array
// satifies a given function. It returns true or false. it cycles
// through each element, and stops when it finds the 1st element
// that satisfies the condition.
//  it does function for empty array elements, and does not change the original array.
//  
// some() example (mdn web docs)


// checks whaether an element is a even number
// const array = [1,2,3,4,5];
// const even = (element) => element % 2 === 0;
// console.log(array.some(even));
// expected output: true

// 2. every() Method
// somewhat similar to the some( method), this method tests whether
// ALL elements in an array  satisfies a given function. It returns true or false.

// every() example 
// const newArray = [4,6,8,10,12];
// const evenNum = (element) => element % 2 === 0;
// console.log(newArray.every(evenNum));
// expected output is "true"

// 3. find() Method
// this method searches through an array & returns the value of the first item 
//  that satisfies the condition. It returns undefined if no elements satisfy the condition.

// find() example
// const num = [12, 11, 13, 14, 15];
// const findNum = (element) => element > 14;
// console.log(num.find(findNum));
// expected output: 15

//  4. findIndex() Method
// this method is similar to the find( method, but instead of returning
//  value of the first element it finds, it returns the index position of the
// first element that satisfies the condition. 
// It returns -1 if no elements satisfy the condition.

// findIndex() example (mdn web docs)
// const array1 = [5, 12, 8, 130, 44];
// const isLargeNumber = (element) => element > 13;
// console.log(array1.findIndex(isLargeNumber));
// output: 3
// 130 is the first element in the array higher than 13, and it's index position is 3







