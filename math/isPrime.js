//Primality Test
// Determine whether an input number is a prime number
// can only be divided by 1 and it's self
// try dividing number by all smaller numbers and return true if it's only
// divisible by itself and 1

// return true or false
// function isPrime(num) {
//   let prime = true;
//   for (let i = num - 1; i >= 2; i--) {
//     if (i % num === 0) {
//       return false;
//     }
//   }
//   return prime;
// }

// function isPrime(num) {
//   for (let i = 2; i < num; i++) {  // 1
//     if (num % i == 0) { // 1
//       return false; // n
//     }
//   }
//   return true; // 1
// }
// LINEAR O(n)

function isPrime(num) {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
// Best Case: number = 1 OR number = 2 -> O(1)
// Average Case: O(n) (Improved: O(sqrt(n)))
// Worst Case: number = 27,277 => O(n) (Improved: O(sqrt(n)))

const answer = isPrime(9);
// const answer = isPrime(9);
console.log("answer", answer);
