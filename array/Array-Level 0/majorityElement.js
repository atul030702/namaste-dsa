function majorityElement(nums) {
    let count = 0;
    let majority = nums[0]; // consider most recurring element is 1st element of array

    for(let num of nums) {
        if(count === 0) majority = num; // if count is 0 mean another element is majority element
        
        if(num === majority) {
            count = count + 1; // increase count if num and majority are same
        }else {
            count = count - 1; // decrease count if they are not the same
        }
    }
    return majority; // return the majority occurring element
};

const nums = [2, 2, 1, 1, 1, 2, 2];

let total = majorityElement(nums);
console.log(total);