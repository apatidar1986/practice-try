// Quick sort

const input = [1, 5, 2, 7, -10, 11, -1, 4, 2];

function doQuick(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const left = [];
  const right = [];

  const pivot = arr[arr.length - 1];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...doQuick(left), pivot, ...doQuick(right)];
}

console.log(doQuick([8, 3, 1, 7, 0, 10, 2]));
