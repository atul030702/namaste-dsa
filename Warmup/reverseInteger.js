// To reverse the given Integer; eg: 321 = 123, -123 = -321 like this

function reverseInteger(x) {
    let originalNum = x;
    let reverse = 0;

    x = Math.abs(x); // Making negative number positive

    while(x > 0) {
        const lastDigit = x % 10;
        reverse = (10 * reverse) + lastDigit;
        x = Math.floor(x / 10);
    }

    const limit = Math.pow(2, 31);
    if(reverse < -limit || reverse > limit) return 0; //Handling for 2 to the power 32, reverse number can't be less than or greater than limit

    return originalNum < 0 ? -reverse : reverse; // Checking original num was negative or positive and returning according to that
}

const result = reverseInteger(12344616546546);
console.log(result);