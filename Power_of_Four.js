// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

// Example 1:

// Input: n = 16
// Output: true
// Example 2:

// Input: n = 5
// Output: false

function isPowOfFour(n) {
  let a = true;
  let count = 0;

  while (a) {
    let value = Math.pow(4, count);
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
}
