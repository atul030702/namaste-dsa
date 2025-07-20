// Implementing bubble sort O(n^2), refer notes for clarification

function bubbleSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {

        let isSwapped = false; // To check whether swapping is being done or not

        for(let j = 0; j < (arr.length - 1) - i; j++) {

            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                isSwapped = true; // true means, swapping is being done
            }
            console.log(arr);
        }
        if(!isSwapped) break; // If it is false then break the loop, array is already sorted
    }
}

bubbleSort([0, 1, 5, 8, 2, 3]);