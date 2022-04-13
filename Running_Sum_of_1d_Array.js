/*

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

*/

let nums = [1,2,3,4];
let ans = sumOf1dArray(nums);

function sumOf1dArray(nums){
    let retArray = [];
    let sum = 0;
    nums.forEach(item =>{
        sum += item;
        retArray.push(sum);
    })
    return retArray;
}

/*

OUTCOME: Solved By ME.

*/