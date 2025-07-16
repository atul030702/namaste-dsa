// 1: Print from n to 1 using recursion
function fun(num) {
    // Always mention base case on top of the function to stop recursion else infinite loop
    if(num === 0) return;

    //console.log(num);
    num = num - 1; 
    fun(num); // calling recursive case
}

let n = 10;

//fun(n);


// 2: Print from 1 to n using recursion
function nToOne(num) {
    if(num > n) return;

    console.log(num);
    num = num + 1;
    nToOne(num);
}

nToOne(1);