// Helper function to get the digit at a specific place
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Helper function to get the number of digits in a number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper function to get the maximum number of digits in the array
function mostDigits(arr) {
  let maxDigits = 0;
  for (let num of arr) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
}

// Radix Sort function
function radixSort(arr) {
  const maxDigitCount = mostDigits(arr);

  for (let k = 0; k < maxDigitCount; k++) {
    // Create buckets for each digit (0 to 9)
    let digitBuckets = Array.from({ length: 10 }, () => []);

    // Place elements into corresponding buckets based on the current digit
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }

    // Flatten the buckets back into the array
    arr = [].concat(...digitBuckets);
  }
  return arr;
}

// Example usage
let arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
