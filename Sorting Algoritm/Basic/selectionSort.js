// To implement the selection sort algorithm, 

function selectionSort(arr) {

    for(let i = 0; i < arr.length - 1; i++) {
        let minEl = i;

        for(let j = i + 1; j < arr.length; j++) {

            if(arr[j] < arr[minEl]) {
                minEl = j;
            }
        }
        
        if(minEl !== i) { // swap when indexes are different, for same index let it be
            let temp = arr[i];
            arr[i] = arr[minEl];
            arr[minEl] = temp;
        }
    }
    return arr;
}

const nums = [7, 1, 5, 4, 3, 2];

console.log(selectionSort(nums));