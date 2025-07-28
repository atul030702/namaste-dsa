function countHillValley(nums) {
    let count = 0;

    let i = 0;
    for(let j = 1; j < nums.length - 1; j++) {

        if(( nums[j] > nums[i] && nums[j] > nums[j+1] ) || ( nums[j] < nums[i] && nums[j] < nums[j+1] )) {
            count = count + 1;
            i = j;
        }
    }
    
    return count;
};

const nums = [2,4,1,1,6,5];

let result = countHillValley(nums);
console.log(result);