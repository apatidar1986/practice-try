// function binarySearch(array, element) {
//   let left = 0;
//   let right = array.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (array[mid] === element) {
//       return mid;
//     }
//     if (array[mid] < element) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch([1, 2, 4, 5, 6, 7, 8, 9, 10], 3));

const binarySearch = (input, target) => {
  let low = 0;
  let high = input.length;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const middle = input[mid];
    if (middle === target) {
      return true;
    } else if (middle < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};
console.log(binarySearch([1, 2, 4, 5, 6, 7, 8, 9, 10], 6));
