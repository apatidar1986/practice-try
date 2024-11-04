// Implement a solution to perform quick sort and count the number of comparisons made

let Count = 0;

const QuickSort = (input) => {
  if (input.length < 2) {
    return input;
  }

  const pivotal = input[input.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < input.length - 1; i++) {
    Count++;
    if (input[i] < pivotal) {
      left.push(input[i]);
    } else {
      right.push(input[i]);
    }
  }

  return [...QuickSort(left), pivotal, ...QuickSort(right)];
};

const input = [8, 3, 1, 7, 0, 10, 2];
const result = QuickSort(input);

console.log("Result:::", result, Count); // [0, 1, 2, 3, 7, 8, 10]
