// Is Power of Two
// Determine wheter an input number is a power of two
// isPowerOfTwo(8); // true
// isPowerOfTwo(5); // false

//Algorithm needs to do one thing
//1. divide number and future division results by two, until 1 is reached and
//check if the remainder is always 0

function isPowerOfTwo(number) {
  if (number < 1) {
    return false;
  }
  let dividedNumber = number;
  while (dividedNumber !== 1) {
    // console.count("Executing...");
    if (dividedNumber % 2 !== 0) {
      return false;
    }
    dividedNumber = dividedNumber / 2;
  }
  return true;
}

// Best Case: number = 13 -> O(1)
// Average Case: O(log n)
// Worst Case: 112,899,906,842,624 => O(log2 n) or O(log n)
// if grows at much slower pace probably logarithmic time

console.log("isPowerOfTwo(8) :>> ", isPowerOfTwo(8));
console.log("isPowerOfTwo(5) :>> ", isPowerOfTwo(5));
console.log("isPowerOfTwo(116) :>> ", isPowerOfTwo(16));
console.log("isPowerOfTwo(13) :>> ", isPowerOfTwo(13));
console.log("isPowerOfTwo(20) :>> ", isPowerOfTwo(20));
