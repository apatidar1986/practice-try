function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Find the index of the minimum element in the unsorted part
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the leftmost unsorted element
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

// Example usage
let arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr)); // Output: [11, 12, 22, 25, 64]
