let arr = [5, 16, -3, 49, 13, 7, 9, 12, 49];

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

    return secondLargestEl;
}

const result = secondLargest(arr);
console.log(result);