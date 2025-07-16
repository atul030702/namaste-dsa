/** 
    Given a binary array nums, return the maximum number of consecutive 1's in the array.

    Input: nums = [1,1,0,1,1,1]
    Output: 3
    Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
*/

function maxConsecutiveOne(arr) {
    let currentCount = 0;
    let maxCount = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 1) {
            currentCount++;
            
        }else {
            maxCount = Math.max(maxCount, currentCount);
            currentCount = 0;
        }
    }
    // In case array ends with 1s not with 0 because loop will end and max value will not be updated
    return Math.max(maxCount, currentCount);
}

const nums = [1, 1, 0, 1, 1, 1, 1, 1];

maxConsecutiveOne(nums);