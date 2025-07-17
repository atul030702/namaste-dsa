/** 
    231. Power of Two
    Given an integer n, return true if it is a power of two. Otherwise, return false.
    An integer n is a power of two, if there exists an integer x such that n == 2x.

    Example 1:

    Input: n = 1
    Output: true
    Explanation: 2^0 = 1
*/

function isPowerOfTwo(num) {
    if(num === 1) return true; // every number's 0 power is 1
    if(num < 1 || num % 2 !== 0) return false; // number less than one or odd number can't be power of two

    return isPowerOfTwo(num / 2); // keep dividing by until num becomes 1 or less than 1
}

console.log(isPowerOfTwo(16));