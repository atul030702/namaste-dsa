let n = 10;

function fun(num) {
    if(num === 0) return; // base case to stop recursion

    console.log(num);
    num = num - 1; 
    fun(num); // calling recursive case
}

fun(n);