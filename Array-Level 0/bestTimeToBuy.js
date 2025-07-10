/** 
    Problem: You are given an array prices where prices[i] is the price of a given stock on the i^th day.

    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

function bestTimeToBuyAndSellStocks(arr) {
    if(arr.length < 2) return 0; // To find it we must have at least 1 element

    let minPrice = Infinity; // Min Price to be the greatest number in js because no number will be greater than this
    let maxProfit = 0; // Initially maxProfit to be supposed to be 0

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < minPrice) {// if i element of array less than minPrice then assign the value of i element to minPrice
            minPrice = arr[i];
        }else if(arr[i] - minPrice > maxProfit) {// The difference of i element of array and minPrice is greater than maxProfit then assign that value to maxProfit
            maxProfit = arr[i] - minPrice;
        }
    }

    return maxProfit;
}

const prices = [10,7,1,5,3,6,4,9];

console.log(bestTimeToBuyAndSellStocks(prices));