function visualizeStep(arr, i, j, key) {
  const line = arr
    .map((num, idx) => {
      if (idx === i) return `[${num}]`;
      if (idx === j) return `(${num})`;
      return ` ${num} `;
    })
    .join(" ");
  console.log(line);
  console.log("-".repeat(line.length));
}
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    visualizeStep(arr, i, j, key);
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Example usage:
const array = [5, 2, 9, 1, 5, 6];
console.log(insertionSort(array)); // Output: [1, 2, 5, 5, 6, 9]

// complexity O(n^2)
// space complexity O(1)
