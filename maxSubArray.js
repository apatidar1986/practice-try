function maxSubArray(array, num) {
  let maxSum = 0;
  let currentSum = array[0];
  let item;
  if (array.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }

  currentSum = maxSum;

  for (let i = num; i < array.length; i++) {
    currentSum = currentSum - array[i - num] + array[i];
    if (maxSum < currentSum) {
      item = i - num + 1 + "-" + i;
    }
    maxSum = Math.max(maxSum, currentSum);
  }
  return { maxSum, item };
}
console.log(maxSubArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
