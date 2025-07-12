/** 
    Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

    Input: nums = [1,2,3,4,5,6,7], k = 3

    Output: [5,6,7,1,2,3,4]
*/

function rotateArray(arr, val) {

    for(let i = val - 1; i >= 0; i--) {
        console.log(val, i);

        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;

        console.log(arr);
    }
    console.log(arr);
}

const nums = [1,2,3,4,5,6,7];

rotateArray(nums, 3);