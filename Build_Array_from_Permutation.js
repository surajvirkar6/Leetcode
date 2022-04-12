/*

Problem:- 
Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

*/

let nums = [0,2,1,5,3,4];
let ans = buildArray(nums);
console.log(ans);

function buildArray(nums){
    let ans = [];
    for(let i=0; i< nums.length; i++){
        ans.push(nums[nums[i]])
    }
    return ans;
}

/*

OUTCOME:- Solved By Me

*/

