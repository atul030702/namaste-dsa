// Sum of first n numbers from 1 to n

let n = 10;

function add(num) {
    if(num < 1) return 0;

    return num + add(num - 1);
}
// sum of n = n + sum(n - 1)

add(n);


// Problem: Sum of all elements in an array using recursion
function sumOfArray(n) {
    if(n === 0) return arr[0];

    return arr[n] + sumOfArray(n - 1);
}

let arr = [6, 5, 3, 2, 0, 1];
sumOfArray(arr.length - 1);


// Problem: Sum of all the odd numbers in an array
function oddSum(num) {
    if(num < 0) return 0;

    return arr[num] % 2 !== 0 
        ? (arr[num] +  oddSum(num - 1)) 
        : oddSum(num - 1);
}

console.log(oddSum(arr.length - 1));