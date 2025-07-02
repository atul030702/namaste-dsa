let arr = [5, 16, -3, 49, 13, 7, 9, 12, 49];

/*
Problem: Find the given number in the array, 
if found return the index of that number else return -1
*/
function findElement(array, num) {
    if(array.length === 0) return null;

    for(let i = 0; i < array.length; i++) {
        if(array[i] === num) return i;
    }

    return -1;
}

const result = findElement(arr, 12);
console.log(result); //output: 7