/**
    509. Fibonacci Number-
    The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
    such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
    F(0) = 0, F(1) = 1
    F(n) = F(n - 1) + F(n - 2), for n > 1.
    Given n, calculate F(n).

    Example 1:
    Input: n = 2
    Output: 1
    Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
*/

// Approach 1: Without memoization, means it will do calculation at every step no matter how many times same recursion fn is called
function fibonacci(num) {
    if(num === 1) return 1;
    else if(num === 0) return 0;

    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(8));


// Approach 2: With memoization, it will reduce calculation operations for same recursion fn O(n)
function fib(num, memo = {}) {
    if(num <= 1) return num; // if number is 1 or less than 1 then return that particular number

    if(memo[num]) return memo[num];// if num value is in memo then return from it, don't calculate

    memo[num] = fib(num - 1, memo) + fib(num - 2, memo); // calling fibonacci series with memo = {} value
    return memo[num]; // return the memoized value
}

console.log(fib(8));