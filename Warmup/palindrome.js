// To find the given number is palindrome or not

function palindromeNumber(num) {
    if(num < 0) return false; // Handling negative numbers because they can't be palindrome

    let n = num; //assigning the num to n, so that n can be modified
    let reverse = 0; // initially consider reverse number is 0

    while(n > 0) { // loop will run only when number is greater than 0

        const remainder = n % 10; //We are finding the remainder of the number to get last digit, 15 % 10 = 5 is remainder and last digit of 15

        reverse = (10 * reverse) + remainder; // reverse is (10 * num) + x; because it will not add digit in reverse but add digit to new place

        n = Math.floor(n / 10); // Decrease the number by ignoring decimal, 1256 / 10 = 125; 125 / 10 = 12 
    }

    return reverse === num; // returning the boolean value by comparing initial value and reverse value
}

const result = palindromeNumber(2552);
console.log(result);

// Above solution has O(log n) time complexity and O(1) space complexity