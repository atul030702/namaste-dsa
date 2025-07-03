for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        //console.log(`i = ${i} | j = ${j}`);
    }
}

//For every value of i loop, j loop will run from 0 to 2 till i loop breaks
/** Result will be printed like this
    i = 0 | j = 0
    i = 0 | j = 1
    i = 0 | j = 2
    i = 1 | j = 0
    i = 1 | j = 1
    i = 1 | j = 2
    i = 2 | j = 0
    i = 2 | j = 1
    i = 2 | j = 2
*/

for(let i = 0; i < 3; i++) {
    for(let j = 0; j < i; j++) {
        //console.log(`i = ${i} | j = ${j}`);
    }
}

//For initial value of i = 0, 
//the j inner loop will not run because it doesn't satisfy the condition of j < i
/** Result will be printed like this
    i = 1 | j = 0
    i = 2 | j = 0
    i = 2 | j = 1
*/

for(let i = 5; i > 0; i--) {
    for(let j = 0; j < i; j++) {
        console.log(`i = ${i} | j = ${j}`);
    }
}

/**For initial value of i = 5, 
 * inner loop j will run 5 times from 0 to 4 but less than i,
 * for every value of i, inner loop j will run less than i times
    i = 5 | j = 0
    i = 5 | j = 1
    i = 5 | j = 2
    i = 5 | j = 3
    i = 5 | j = 4
    i = 4 | j = 0
    i = 4 | j = 1
    i = 4 | j = 2
    i = 4 | j = 3
    i = 3 | j = 0
    i = 3 | j = 1
    i = 3 | j = 2
    i = 2 | j = 0
    i = 2 | j = 1
    i = 1 | j = 0
*/