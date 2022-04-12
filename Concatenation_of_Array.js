/*
Problem:-
Given an integer array, need to return concatenation of array 
*/

let nums = [1, 2, 3, 4, 5];
let ans = concatenate(nums);
console.log(ans);

// By using spread operator
function concatenate(nums) {
    return [...nums, ...nums];
}

/*

OUTCOME:- Solved By Me.

*/
