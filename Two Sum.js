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
  const indices = {};
  nums.forEach((element, index) => {
    indices[element] = index;
  });
  // console.log(indices);
  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index];
    // console.log(complement);
    if (indices[complement] !== undefined && indices[complement] !== index) {
      return [index, indices[complement]];
    }
  }
}
