/**
    Problem: Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
    The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
*/

// To get reference you can see removeDuplicate.js file, we have used same concept here

function removeElement(arr, val) {
    let x = 0;

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] !== val) {
            arr[x] = arr[i];
            x = x + 1;
        }
    }
    arr.length = x;

    console.log(arr);
    return x; // We are returning x because x is already updating after doing the task in if block
}

const arr1 = [0, 1, 1, 2, 2, 5, 5, 2];

const result = removeElement(arr1, 2);
console.log(result);
