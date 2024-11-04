function interleaveArrays(array1, array2) {
  let mergedArray = [];
  let maxLength = Math.max(array1.length, array2.length); // Find the longer length

  // Iterate over the length of the longer array
  for (let i = 0; i < maxLength; i++) {
    // Add element from the first array, if available
    if (i < array1.length) {
      mergedArray.push(array1[i]);
    }
    // Add element from the second array, if available
    if (i < array2.length) {
      mergedArray.push(array2[i]);
    }
  }

  return mergedArray;
}

// Example usage:
const array1 = [1, 3, 5];
const array2 = [2, 4, 6, 8, 10];

const interleavedArray = interleaveArrays(array1, array2);
console.log(interleavedArray); // Output: [1, 2, 3, 4, 5, 6, 8, 10]
