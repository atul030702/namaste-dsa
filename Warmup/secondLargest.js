let arr = [5, 16, -3, 49, 13, 7, 9, 12, 49];

//Find the second largest element in a given array
function secondLargest(array) {
    //Need to have at least 2 elements in array to find second largest
    if(array.length < 2) return null;

    /*There is no value smaller than -Infinity, 
    so it can be assigned as largest initially*/
    let largestEl = -Infinity; 
    let secondLargestEl = -Infinity; 
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] > largestEl) {
            //largestEl previous value will be second largest
            secondLargestEl = largestEl; 
            //largestEl value will be assigned to largest element in the array
            largestEl = array[i]; 
        }else if(array[i] > secondLargestEl && array[i] !== largestEl) {
            //Here we are preventing duplicate value to be assigned as secondLargestEl
            secondLargestEl = array[i];
        }
    }

    return secondLargestEl; //16
}

//const result1 = secondLargest(arr);
//console.log(result1);

//Find the largest element in a given array
function largestElement(array) {
    if(array.length === 0) return null;

    let largestEl = -Infinity;

    for(let i = 0; i < array.length; i++) {
        if(array[i] > largestEl) largestEl = array[i];
    }

    return largestEl; //output: 49
}

//const result2 = largestElement(arr);
//console.log(result2);