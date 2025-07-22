

function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) { // starting from 1 because 0th element is sorted supposedly
        let curr = arr[i]; // curr element have i index meaning 1 to less than arr.length
        let prev = i - 1; // previous element is element left of i index element
        while(arr[prev] > curr && prev >= 0) {
            arr[prev + 1] = arr[prev];
            prev--;
            console.log(arr);
        }

        arr[prev + 1] = curr;
    }
    return arr;
}

const num = [3, 4, 5, 7, 1, 2];

console.log(insertionSort(num));