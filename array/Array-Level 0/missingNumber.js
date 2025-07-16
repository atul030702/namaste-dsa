/** 
    Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

    Input: nums = [9,6,4,2,3,5,7,0,1]

    Output: 8
    Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 
    8 is the missing number in the range since it does not appear in nums.

    sum of whole numbers from 0 to n = n(n + 1) / 2
*/

function missingNumber(arr) {
    let n = arr.length;
    let sequenceSum = (n) * (n + 1) / 2; // sum of numbers from 0 to n
    let arrSum = 0;

    for(let i = 0; i < n; i++) {
        arrSum += arr[i];
    }

    return (sequenceSum - arrSum);
}

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

missingNumber(nums);