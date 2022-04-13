/*
There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.
*/

let operations = ["--X","X++","X++"];
let ans = finalValueOfVariable(operations);
console.log(ans);

function finalValueOfVariable(operations){
    let x = 0;
    operations.forEach(item => {
        if(item.split('')[1] == '-'){
            x -= 1;
        } else {
            x +=1
        }
    })
    return x;
}

/*
OUTCOME: SOlved BY Me.
*/