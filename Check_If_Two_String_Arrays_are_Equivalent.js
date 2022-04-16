/**
 Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.
 */

let word1 = ["ab", "c"];
let word2 = ["a", "bc"];
let ans = function arrayStringsAreEqual(word1, word2) {
  let word1String = "";
  let word2String = "";
  word1.forEach((item) => {
    word1String += item;
  });
  word2.forEach((item) => {
    word2String += item;
  });
  if (word1String == word2String) {
    return true;
  } else {
    return false;
  }
};
console.log(ans);

/**
OUTCOME: Solved By Me.
 */
