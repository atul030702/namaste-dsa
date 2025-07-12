const nums = [0,1,0,3,12];

// Both the solution are optimal for this case with O(n) time complexity

/*function moveZeros(arr) {
    let x = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            arr[x] = arr[i];
            x = x + 1;
        }
    }
    console.log(arr);

    for(let j = x; j < arr.length; j++) {
        console.log(j);
        arr[j] = 0;
    }

    console.log(arr);
}*/

function moveZeros(arr) {
    let x = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            if(i !== x) {
                let temp = arr[i];
                arr[i] = arr[x];
                arr[x] = temp;
            }
            
            x = x + 1;
        }
    }
    console.log(x);
    console.log(arr);
}

moveZeros(nums);