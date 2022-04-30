// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16

let n = 1;
let ans = function isPowOfTwo(n) {
  let a = true;
  let count = 0;

  while (a) {
    let value = Math.pow(2, count);
    if (value == n) {
      a = false;
      return true;
    } else if (value <= n) {
      count++;
    } else {
      a = false;
      return false;
    }
  }
};
