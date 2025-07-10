/** 
    Problem: Write a function that reverses a string. The input string is given as an array of characters arr.
    You must do this by modifying the input array in-place with O(1) extra memory.
*/

/**
    ["a", "t", "u", "l"]; I have to reverse my name
    loop start from i and will run till i < n/2
    swap(i, n-1 -i) 0 value a will be swapped by n-1-i = 4-1-0 = 3 index value l

    i | n - 1 - i
    0 | 3       --> a -><- l (swapped values)
    1 | 2       --> t -><- u
*/

function reverseString(arr) {

    const arrLength = arr.length; // Total length of array
    const halfLength = Math.floor(arrLength / 2); // Half length of array, Math.floor incase of decimal number

    for(let i = 0; i < halfLength; i++) { // loop will run for half of array length
        let temp = arr[i]; // Temporary variable to store the initial value of arr[i] element
        arr[i] = arr[arrLength - 1 - i]; // Swapping arr[i] element with arr[arrLength - 1 - i] element
        arr[arrLength - 1 - i] = temp; // Now that arr[arrLength - 1 - i] variable with temp value which is arr[i] element value
    }

    return arr; // returning the original array
}

const strArray = ["h", "e", "l", "l", "o"];

reverseString(strArray);