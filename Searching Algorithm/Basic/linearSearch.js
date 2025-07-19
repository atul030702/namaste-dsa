/** 
    Linear Search is an algorithm which searches for an element within that array.

    Time Complexity: O(n)
*/

const arr = [4, 9, 0, 1, 2];

function linearSearch(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1; // return -1 if val is not present in the array
}
console.log(linearSearch(arr, 12));