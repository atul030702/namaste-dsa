// We have to count the number of digits in a given number,
// eg: number = 159, count = 3

function countDigits(n) {
    if(n === 0) return 1; // handling 0 case

    n = Math.abs(n);// converting negative number to positive
    let count = 0;

    while(n > 0) {
        n = Math.floor(n / 10); // 259 / 10 = 25; 25 / 10 = 2; 2 / 10 = 0 basically ignore decimals
        count++;
    }

    return count;
}

const result = countDigits(-298);
//console.log(result);
// Above solution is more performant in terms of time and space complexity

// 2nd approach below but less performant than above
function countDigit(n) {
    return Math.abs(n).toString().length;
}

console.log(countDigit(-0));