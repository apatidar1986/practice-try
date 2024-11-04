const input = [2, -1, 5, 11, 4, 3, 2];

const merge = (left, right) => {
  let i = 0;
  j = 0;
  const result = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
};

const mergeSort = (input) => {
  if (input.length < 2) {
    return input;
  }

  const mid = input.length / 2;

  const l = input.slice(0, mid);
  const r = input.slice(mid);

  return merge(mergeSort(l), mergeSort(r));
};

console.log(mergeSort(input));
