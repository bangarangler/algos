let start = 0;
let end = 0;

// LINEAR TIME
// function sumUp(num) {
//   let result = 0;
//   for (let i = 1; i <= num; i++) {
//     result += i;
//   }
//   return result
// }

// CONSTANT TIME
// function sumUp(num) {
//   // mathmatical formula
//   return (num / 2) * (1 + num);
// }

// ok for super small tasks but not the best judge of time
// start = performance.now();
// console.log("start: ", start);
// const answer = sumUp(50000000000);
// console.log("answer", answer);
// end = performance.now();
// console.log("end: ", end);
//
// console.log("end - start", end - start);

// write an algorithm that takes an array of numbers as input and calculates the sum of those numbers.
//
//   Define the Time Cdomplexity of that algorithm and determine what the lowest possible Time Complexity is for this problem.

// function sumNumbers(numbers) { ??? }
//
// function sumNumbers(numbers) {
//   let res = 0;
//   numbers.forEach((num) => {
//     res += num;
//   });
//   return res;
// }
// Time Complexity O(n) Linear

// if always 3 numbers
// function sumNumbers(numbers) {
//   return numbers[0] + numbers[1] + numbers[2]
// }
// Time Complexity O(1)

// function sumNumbers(numbers) {
//   return (numbers.length * (numbers[0] + numbers.length)) / 2;
// }
// Time Complexity O(1) Constant

// function sumNumbers(numbers) {
//   let result = 0; // 1
//   for (const number of numbers) { // 1
//     result += number; // 3 => n
//   }
//   return result; // 1
// }
// T = 1 + 1 + 1 + n = 3 + n = 3 + 1*n
// T = 1*n
// T = n
// TIME COMPLEXITY O(n) Linear

function sumNumbers(numbers) {
  return numbers.reduce((sum, curNum) => sum + curNum, 0);
}
// Time Complexity O(n) Linear

sumNumbers([1, 2, 3]);
start = performance.now();
console.log("start: ", start);
const answer = sumNumbers([1, 3, 10, 50]);
console.log("answer", answer);
end = performance.now();
console.log("end: ", end);

console.log("end - start", end - start);
