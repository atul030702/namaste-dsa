// To find factorial of a given number  using recursion

function findFactorial(num) {
    if(num < 0) return undefined; // negative numbers factorial is undefined

    if(num === 0) return 1; // factorial of 0 is 1

    return num * findFactorial(num - 1);
}

console.log(findFactorial(5));