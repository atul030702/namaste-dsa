const nums = [0,1,0,3,12];

// Both the solution are optimal for this case with O(n) time complexity

// Solution 1:
function moveZeros1(arr) {
    let x = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            arr[x] = arr[i];
            x = x + 1;
        }
    }

    // Fill all the remaining elements to 0
    for(let j = x; j < arr.length; j++) {
        arr[j] = 0;
    }

    //console.log(arr);
}
moveZeros1()

// Solution 2
function moveZeros2(arr) {
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
    //console.log(x);
    //console.log(arr);
}

moveZeros2(nums);