/* 

Problem:- 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

Inputs:-
nums = [2,7,11,15];
target = 9;

Output:-
[0,1]
*/

let nums = [2, 7, 11, 15];
let target = 9;
let sum = twoSum(nums, target);
console.log("indices are", sum);

function twoSum(nums, target) {
  let leftindex = 0;
  let rightIndex = nums.length - 1;
  while (nums[leftindex] + nums[rightIndex] !== target) {
    rightIndex -= 1;
  }
  return [leftindex, rightIndex];
}
