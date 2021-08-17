// factorial
// fact(3); // 3 * 2 * 1 = 6
// go through all smaller numbers and multiply them with each other (and with
// the input number)

function fact(num) {
  if (num < 0) return;
  let res = num;
  for (let i = num; i > 1; i--) {
    // console.log("i", i);
    // console.log("i - 1", i - 1);
    // console.log("i * (i - 1)", i * (i - 1));
    res = res * (i - 1);
    console.log("res", res);
  }
  return res;
  // let thing = 1;
  // for (let i = num; i >= 1; i--) {
  //   console.log("i", i);
  //   thing = thing * i;
  // }
  // return thing;
}
// O(n) Linear

const answer = fact(3);
// let answer1 = fact(4);
// let answer2 = fact(5);
console.log("answer", answer);
// console.log("answer1", answer1);
// console.log("answer2", answer2);
