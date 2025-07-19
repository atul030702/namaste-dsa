/**
    704. Binary Search
    Given an array of integers nums which is sorted in ascending order, and an integer target, 
    write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

    You must write an algorithm with O(log n) runtime complexity.

    Example 1:
    Input: nums = [-1,0,3,5,9,12], target = 9
    Output: 4
    Explanation: 9 exists in nums and its index is 4
*/

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(target === arr[mid]) {
            return mid;
        }else if(target > arr[mid]) {
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }

    return -1;
}

const nums = [-1, 0, 3, 5, 9, 12];

console.log(binarySearch(nums, 9));


// Approach 2: Using Recursion
function binarySearchRecursion(arr, target) {
    function search(left, right) {
        if(left > right) return -1;

        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === target) {
            return mid;
        }else if(arr[mid] < target) {
            return search(mid + 1, right);
        }else {
            return search(left, mid - 1);
        }
    }
    
    return search(0, arr.length - 1);
}

const nums2 = [-3, 0, 1, 4, 6, 7];
console.log(binarySearchRecursion(nums2, 0));