/** 
    Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

    Input: nums = [1,2,3,4,5,6,7], k = 3

    Output: [5,6,7,1,2,3,4]
*/

function reverse(arr, start, end) {
    
    while(start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }

    console.log(arr);
    return arr;
}

function rotateArray(arr, val) {
    let n = arr.length;
    val = val % n; // In case k > n

    reverse(arr, 0, (n - 1)); // rotating the whole array
    reverse(arr, 0, (val - 1)); // rotating the first val no of elements
    reverse(arr, val, (n - 1)); // rotating the remaining array
}

const nums = [1,2,3,4,5,6,7];

rotateArray(nums, 3);