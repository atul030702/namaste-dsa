/* Problem: Given an integer array nums sorted in non-decreasing order, 
    remove the duplicates in-place such that each unique element appears only once. 
    The relative order of the elements should be kept the same. 
    Then return the number of unique elements in nums.
*/

function removeDuplicates(arr) {
    let x = 0; // First pointer (x) will maintain a index, initially it is at 0 index

    for(let i = 0; i < arr.length; i++) { // Second pointer (i) will loop through the whole array to check elements

        /*
            If condition checks whether element at i index is greater than element at x index, 
            because it is a non-decreasing array meaning each unique element will greater than previous unique element
        */
        if(arr[i] > arr[x]) { 
            x = x + 1; // Increase the value of x by 1 to put new unique value at next index
            arr[x] = arr[i]; // Inserting new unique element at new index of x
        }
    }
    console.log(arr);
    return (x + 1); // Returning x+1 because x is starting from 0
}

const arr1 = [0, 0, 1, 1, 2, 2, 3, 3, 3, 4]; // We have to modify this existing array, do not create new one 

const result = removeDuplicates(arr1);
console.log(result);