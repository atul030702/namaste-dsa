/**
1. To print star pattern like this when n = 4 (rows = 4, column = 4)
    ****
    ****
    ****
    ****
*/

for(let i = 0; i < 4; i++) { // i is responsible for row |
    let row = "";

    for(let j = 0; j < 4; j++) { // j is responsible for columns -
        row = row + "*";
    }
    //console.log(row);
}

/**
2. To print star pattern like this when n = 4
    *
    **
    ***
    ****
*/

for(let i = 0; i < 4; i++) {
    let row = "";

    for(let j = 0; j <= i; j++) {
        row = row + "*";
    }

    //console.log(row);
}

/**
3. To print number pattern like below when n = 5 (rows = 5, columns = 5)
    1
    1 2
    1 2 3  
    1 2 3 4
    1 2 3 4 5
*/

for(let i = 1; i <= 5; i++) {
    let row = "";

    for(let j = 1; j <= i; j++) {
        row = row + `${j} `;
    }

    //console.log(row);
}

/**
3. To print number pattern like below when n = 5 (rows = 5, columns = 5)
    1
    2 2
    3 3 3 
    4 4 4 4
    5 5 5 5 5
*/

for(let i = 1; i <= 5; i++) {
    let row = "";

    for(let j = 1; j <= i; j++) {
        row = row + `${i} `;
    }
    
    //console.log(row);
}

/**
4. To print number pattern like below when n = 5 (rows = 5, columns = 5)
    1 2 3 4 5
    1 2 3 4
    1 2 3
    1 2
    1
*/

for(let i = 5; i > 0; i--) {
    let row = "";

    for(let j = 1; j <= i; j++) {
        row = row + `${j} `;
    }

    //console.log(row);
}

/**
5. To print star pattern like below when n = 5 (rows = 5, columns = 5)
            *
          * *
        * * *
      * * * *
    * * * * *
*/

for(let i = 0; i < 5; i++) {
    let row = "";

    for(let j = 0; j < 5-(i+1); j++) {
        row = row + " ";// appending space " " in row based on condition 5-(i+1) = 5-(0+1) = 5-1 = 4 so 4 spaces will be added
    }

    for(let k = 0; k < i+1; k++) {// k will run based on i value, here k loop will run only 1 time initially and increase every time (i + 1 = 0 + 1 = 1)
        row = row + "*";// appending star in row
    }

    //console.log(row);
}

/**
5. To print star pattern like below when n = 5 (rows = 5, columns = 5)
    1
    1 0
    1 0 1
    1 0 1 0
    1 0 1 0 1
    1 0 1 0 1 0
*/

for(let i = 0; i < 5; i++) {
    let row = "";
    let toggle = 1;

    for(let j = 0; j <= i; j++) {
        row = row + toggle;
        //switch the toggle for value of toggle
        toggle === 1 ? toggle = 0 : toggle = 1;
    }

    console.log(row);
}