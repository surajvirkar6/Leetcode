/**
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"

Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088" 
*/

let num1 = '2';
let num2 = '3';
let ans = function multiply(num1, num2){
    return (BigInt(num1) * BigInt(num2)).toString();
}