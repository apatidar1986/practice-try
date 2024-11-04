/**
 * Insertion Sort
 */

function InsertionSort(input) {
  for (let i = 1; i < input.length; i++) {
    let current = input[i];
    let j = i - 1;
    while (j >= 0 && input[j] > current) {
      input[j + 1] = input[j];
      j--;
    }
    input[j + 1] = current;
  }
  return input;
}

const arr = [8, 3, 1, 7, 0, 10, 2];
const result = InsertionSort(arr);
console.log("Result:::", result); // [0, 1, 2, 3, 7, 8, 10]
