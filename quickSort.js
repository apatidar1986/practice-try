// function quickSort(arr) {
//   // Base case: arrays with 1 or fewer elements are already sorted
//   if (arr.length <= 1) {
//     return arr;
//   }

//   // Choose a pivot (usually the last element in the array)
//   const pivot = arr[arr.length - 1];
//   const left = [];
//   const right = [];

//   // Partitioning the array into two halves: left (smaller than pivot) and right (larger than pivot)
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   // Recursively sort left and right, then concatenate with the pivot
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// Example usage
// const arr = [8, 3, 1, 7, 0, 10, 2];
// const sortedArr = quickSort(arr);
// console.log(sortedArr);

const quickSort = (input) => {
  if (input.length < 2) {
    return input;
  }

  //let pivot = input.length - 1;
  const pivot = input[input.length - 1];
  // let left = input.slice(0, pivot);
  // let right = input.slice(pivot + 1);
  let left = [];
  let right = [];

  //for (let i = 0; i < input.length - 1; i++) {
  // for (let i = 0; i < input.length - 1; i++) {
  //   if (input[i] < pivot) {
  //     left.push(input[i]);
  //   } else {
  //     right.push(input[i]);
  //   }
  // }
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] < pivot) {
      left.push(input[i]);
    } else {
      right.push(input[i]);
    }
  }
  //return [...quickSort(left), pivot, ...quickSort(right)];
  return [...quickSort(left), pivot, ...quickSort(right)];
};

const arr = [8, 3, 1, 7, 0, 10, 2];

console.log(quickSort(arr));
