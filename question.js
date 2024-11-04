//max profit with single buy sell

//Find the maximum profit that can be made with a single buy-sell transaction

const prices = [7, 1, 5, 3, 6, 4];
const output = [];
const maxProfit = (prices) => {
  let min = prices[0];
  let max = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] > max) {
      max = prices[i];
    }
  }
  console.log(max, min);

  return max - min;
};

// console.log(maxProfit(prices));

// var prices = [7, 1, 5, 3, 6, 4];

// function maxProfit(prices) {
//   var minPrice = Infinity;
//   var maxProfit = 0;

//   for (var i = 0; i < prices.length; i++) {
//     if (prices[i] < minPrice) {
//       minPrice = prices[i];
//     } else if (prices[i] - minPrice > maxProfit) {
//       maxProfit = prices[i] - minPrice;
//     }
//   }

//   return maxProfit;
// }

// var result = maxProfit(prices);
// console.log(result);

// document.getElementById("app").innerHTML = `
// <h1>Maximum profit is - ${result}$</h1>
// `;

// find 3 keys with 3 max value
var myDict = { a: 10, b: 20, c: 10, d: 30, e: 20, f: 30 };

function maxValueKey(myDict) {
  const result = [];

  //   for (let [key, value] of Object.entries(myDict)) {
  //     result.push({ value: value, key: key });
  //   }

  //   console.log(result);
  return Object.entries(myDict)
    .sort((a, b) => {
      // console.log(a, b, a);
      return a.value > b.value ? -1 : 1;
    })
    .slice(0, 3);

  //return result;
}

console.log(maxValueKey(myDict));

var numbers = [1, 3, 4, 5, 7, 8]; // missing number
var numbers2 = [5, 2, 3];
var numbers3 = [1, 3, 4, 5, 7];

//
