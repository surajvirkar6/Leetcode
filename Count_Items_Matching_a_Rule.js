/*
You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.
*/

let items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "lenovo"],
  ["phone", "gold", "iphone"],
];
let ruleKey = "color";
let ruleValue = "silver";
let ans = function countMatches(item, ruleKey, ruleValue) {
  let retAns = 0;
  if (ruleKey == "type") {
    items.forEach((item) => {
      if (item[0] == ruleValue) {
        retAns += 1;
      }
    });
  } else if (ruleKey == "color") {
    items.forEach((item) => {
      if (item[1] == ruleValue) {
        retAns += 1;
      }
    });
  } else if (ruleKey == "name") {
    items.forEach((item) => {
      if (item[2] == ruleValue) {
        retAns += 1;
      }
    });
  }
  return retAns;
};
console.log(ans);

/**
 OUTCOME:- Solved By Me.
 */
