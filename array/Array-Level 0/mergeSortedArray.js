/**
    88. Merge Sorted Array (Easy)

    You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
    representing the number of elements in nums1 and nums2 respectively.

    Merge nums1 and nums2 into a single array sorted in non-decreasing order.

    The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, 
    where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

    Example 1:
    Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    Output: [1,2,2,3,5,6]
    Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
    The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/

// 1st Approach: Time complexity is optimal but space complexity is O(n) for below solution
function merge(nums1, m, nums2, n) {
    const nums1Copy = nums1.slice(0, m); // copy of nums1 array
    
    let p1 = 0; // pointer 1
    let p2 = 0; // pointer 2

    for(let i = 0; i < m+n; i++) {

        // In if condition p2 >= n condition means p2 pointer should not be out of bound if it crosses (n = 3), then p1 should go in nums1 array
        // p1 < m && nums1Copy[p1] < nums2[p2], Here it checks whether p1 is not out of bound and nums1Copy array's element is lesser than nums2[p2]
        if( p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2]) ) {
            nums1[i] = nums1Copy[p1];
            p1 = p1 + 1;

        }else {
            nums1[i] = nums2[p2];
            p2 = p2 + 1;
        }
    }

    //console.log(nums1);
}

// 2nd Approach: Time complexity is O(m+n) and space complexity is O(1) for below solution
function merge2(nums1, m, nums2, n) {

    let p1 = m - 1;
    let p2 = n - 1;

    for(let i = m + n - 1; i >= 0; i--) { // loop in reverse order and inserting large element in last part of array

        if(p2 < 0) break; // if pointer 2 is less than 0 then break the loop because work has been done

        if( p1 >= 0 && nums1[p1] > nums2[p2]) { // p1 should be greater or equal to 0 and nums1[p1] element is greater than nums2[p2] element

            nums1[i] = nums1[p1]; // assigning nums1[i] to nums1[p1] in the last indexes of nums1 array
            p1 = p1 - 1; // decreasing the pointer 1 value by 1

        }else {
            nums1[i] = nums2[p2];
            p2 = p2 - 1;
        }
    }

    return nums1;
}

const nums1 = [1, 2, 3, 0, 0, 0];   
const m = 3;

const nums2 = [2, 5, 6];
const n = 3;

let result = merge2(nums1, m, nums2, n);
console.log(result);