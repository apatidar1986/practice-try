// Function to merge two sorted arrays
function merge(left, right) {
  let sortedArray = [];
  let i = 0,
    j = 0;

  // Compare elements from both arrays and merge them in sorted order
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  // If there are any remaining elements in the left array, add them
  while (i < left.length) {
    sortedArray.push(left[i]);
    i++;
  }

  // If there are any remaining elements in the right array, add them
  while (j < right.length) {
    sortedArray.push(right[j]);
    j++;
  }

  return sortedArray;
}

// Main function for merge sort
function mergeSort(array) {
  // Base case: arrays with fewer than 2 elements are already sorted
  if (array.length < 2) {
    return array;
  }

  // Split the array into two halves
  const middleIndex = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middleIndex);
  const rightHalf = array.slice(middleIndex);

  // Recursively split & merge
  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

// Example usage:
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log("Sorted Array:", sortedArray);

const unsortedArray1 = [
  38,
  27,
  43,
  3,
  9,
  -82,
  10,
  -82,
  -Infinity,
  Infinity,
  Infinity,
];
const sortedArray1 = mergeSort(unsortedArray1);
console.log("Sorted Array1:", sortedArray1);
