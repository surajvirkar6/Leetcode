/* 
You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
Return the shuffled string.
 */

let s = 'codeleet';
let indices = [4,5,6,7,0,2,1,3];
let ans = function restoreString(s, indices){
    let retAns = ''
    for(let i=0; i<indices.length; i++){
        retAns += s[indices.indexOf(i)];
    }
    return retAns;
}
console.log(ans);

/*
OUTCOME: Solved By Me.
*/