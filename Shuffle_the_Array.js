/*
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
Return the array in the form [x1,y1,x2,y2,...,xn,yn].
*/

let nums = [2,5,1,3,4,7];
let n = 3;
let ans = function shuffleArray(nums, n){
    let x = nums.slice(0, n);
    let y = nums.slice(n, nums.length);
    let retAns = [];
    for(let i=0; i<n; i++){
        retAns.push(x[i]);
        retAns.push(y[i]);
    }
    return retAns;
}
console.log(ans)

/*
OUTCOME: Solved By Me.
*/