// Devise an algorithm to inject an element into a sorted array, ensuring it remains ordered.

function insertElementSortedArray(array, element) {
  let l = array.length;
  let number = 0;

  const result = [...array];
  if (array[l - 1] < element) {
    result.splice(l, 0, element);

    return result;
  }

  if (result.includes(element)) {
    const i = result?.indexOf(element);
    result.splice(i, 0, element);
  } else {
    let k = 0;
    let realPosition = 0;
    for (let p = 0; p < result.length; p++) {
      if (result[p] < element && result[p + 1] > element) {
        realPosition = p + 1;
        //k++;
      }
    }
    result.splice(realPosition, 0, element);

    return result;
  }

  return result;
}

function insertElementSortedArrayOptimized(array, element) {
  const result = [...array];

  let index = 0;

  while (index < result.length && result[index] < element) {
    index++;
  }

  result.splice(index, 0, element);

  return result;
}

console.log(
  insertElementSortedArray([1, 5, 8, 11], 5),
  insertElementSortedArrayOptimized([1, 5, 8, 11], 5)
);
console.log(
  insertElementSortedArray([1, 5, 8, 11], 9),
  insertElementSortedArrayOptimized([1, 5, 8, 11], 9)
);

console.log(
  insertElementSortedArray([1, 5, 8, 11], 2),
  insertElementSortedArrayOptimized([1, 5, 8, 11], 2)
);
console.log(
  insertElementSortedArray([1, 5, 8, 11], 1),
  insertElementSortedArrayOptimized([1, 5, 8, 11], 1)
);

console.log(
  insertElementSortedArray([1, 5, 8, 11], 0),
  insertElementSortedArrayOptimized([1, 5, 8, 11], 0)
);

console.log(
  insertElementSortedArray([1, 5, 8, 11], 12),
  insertElementSortedArrayOptimized([1, 5, 8, 11], 12)
);
