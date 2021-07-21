console.log("Math Algorithms");

// function fib(elToReturn) {
//   const sequence = [1, 1]; // 1
//   for (let i = 0; i < elToReturn; i++) {
//     // 1
//     sequence.push(sequence[i] + sequence[i + 1]); // 3 -> n
//   }
//   return sequence[elToReturn]; // 1
// }
// LINEAR TIME O(n)
// time and memory

// function fib(num) {
//   // In linear time
//   let n1 = 1;
//   let n2 = 1;
//   for (let i = 1; i < num; i++) {
//     const newNum = n2 + n1;
//     n1 = n2;
//     n2 = newNum;
//   }
//   return n2;
// }
// LINEAR TIME O(n)
// CONSTANT for memory O(1)

// function fib(num) {
//   // Constant time math equation - Had to look the EQ up.
//   const phi = (1 + Math.sqrt(5)) / 2;
//   const Phi = (1 - Math.sqrt(5)) / 2;
//   return Math.round(-(Math.pow(Phi, num) - Math.pow(phi, num)) / Math.sqrt(5));
// }

// harder to read but tech saves some loop cycles
function fib(n) {
  // 1
  const numbers = [1, 1]; // 1
  // let counts = 0;
  for (let i = 2; i < n + 1; i++) {
    // 1
    numbers.push(numbers[i - 2] + numbers[i - 1]); // n - 1
    //console.log("running");
    // counts++;
  }
  console.log("counts", counts);
  return numbers[n]; // 1
}
// LINEAR TIME O(n)

const answer = fib(5);

console.log("answer", answer);
