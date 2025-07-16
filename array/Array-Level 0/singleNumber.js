/**
    Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
    You must implement a solution with a linear runtime complexity and use only constant extra space.

    Example 2:
    Input: nums = [4,1,2,1,2]
    Output: 4
*/

// Use bitwise xor for this problem
function singleNumber(arr) {
    let xor = 0;

    for(let i = 0; i < arr.length; i++) {
        xor = xor ^ arr[i]; // xor ^ symbol, basically a xor a = 0, a xor 0 = a
    }

    console.log(xor);
}

const nums = [4,1,2,1,2];

singleNumber(nums);