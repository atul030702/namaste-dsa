function mergeArray(arr1, arr2) {
    const result = [];

    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }else {
            result.push(arr2[j]);
            j++;
        }
    }

    // writing logic for remaining elements if loop ended with elements in any of the two arrays
    return [...result, ...arr1.slice(i), ...arr2.slice(j)];
}

function mergeSort(arr) {
    if (arr.length === 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return mergeArray(left, right);
}

let num = [1, 2, 3, 9, 4, 6, 5];

let result = mergeSort(num);
console.log(result);

//Approach 2: Merge Sort with O(n log n) time complexity
function mergeSort2(arr) {

    function sort(start, end) {
        // Base case: if start and end have same index means subarray has only one element in it
        if(start === end) return [ arr[start] ]; // [arr [start]] because we have to return array

        const mid = Math.floor((start + end) / 2);

        // Recursive case
        const left = sort(start, mid); // left half subarray
        const right = sort(mid + 1, end); // right half subarray

        return mergeArray(left, right);
    }
    
    return sort(0, arr.length - 1);
};

console.log(mergeSort2(num));