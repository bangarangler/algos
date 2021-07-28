// Write two algorithms:
// 1. first algo should take an array of numbers as input and return minimum
// value in the array
// 2. second algo should take a number as input and return "true" if it's an
// even number, "false for odd numbers"
// also define time complexities and possible cases for both algorithms.

// function getMinFromArr(arr) {
//   let min = arr[0]; // 1
//   for (let i = 0; i < arr.length; i++) { // 1
//     if (arr[i] < min) { // n
//       min = arr[i];
//     }
//   }
//   return min; // 1
// }
// LINEAR O(n)

// function evenOrOdd(num) {
//   if (num % 2 === 0) {
//     // 1
//     return "true";
//   } else {
//     return "false";
//   }
// }

// CONSTANT O(1)??

// console.log("answer", getMinFromArr([7, 123, 11]));
// console.log("answer", evenOrOdd(7));

function getMin(numbers) {
  let currentMin = numbers[0]; // 1
  // 1
  for (const num of numbers) {
    // n
    if (num < currentMin) {
      currentMin = num; // 0 (Best Case), n - 1 (Worst Case), 1 (Avg. Case)
    }
  }
  return currentMin; // 1
}

// Best CASE: [1,2,3] => O(n)
// Worst CASE: [3,2,1] => O(n)
// Average CASE: [2,1,3] => O(n)

console.log(getMin([1, 2, 3]));
console.log(getMin([9, 8, 3, 5, 1]));
console.log(getMin([10, 3, 3, 6, 55]));

function isEven(number) {
  // 1
  return number % 2 === 0;
}
// CONSTANT TIME: O(1)

console.log(isEven(2));
console.log(isEven(4));
console.log(isEven(7));

// O(n) Higher n leads to a linear increase in runtime -- Look for (single) loops
// O(1) higher n does not affect runtime
