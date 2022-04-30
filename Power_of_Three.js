// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example 1:

// Input: n = 27
// Output: true
// Example 2:

// Input: n = 0
// Output: false

function isPowOfThree(n) {
  let a = true;
  let count = 0;

  while (a) {
    let value = Math.pow(3, count);
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
