/*
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
*/

let nums = [[1,2,3],[3,2,1]];
let ans = richCustomerWealth(nums);

function richCustomerWealth(nums){
    let retAns = [];
    accounts.forEach(item => {
        let sum = 0
        item.forEach(value =>{
            sum += value;
        })
        retAns.push(sum);
    })
    return Math.max(...retAns);
}

/*
OUTCOME: Solved By Me.
*/