const input1 = [1, 2, 4, 6, 8];

const input2 = [1, 6, 8, 12];

// const input1 = [1, 2];

// const input2 = [1, 6];

function u(input, start, end, result) {
  for (let k = start; k < end; k++) {
    result.push(input[k]);
  }
  return result;
}

function mergeSortedArray(input1, input2) {
  let counter1 = 0;
  let counter2 = 0;
  let result = [];

  /// let counter = 0;

  while (counter1 < input1.length && counter2 < input2.length) {
    if (input1[counter1] < input2[counter2]) {
      result.push(input1[counter1]);
      counter1++;
    } else {
      result.push(input2[counter2]);
      counter2++;
    }

    // counter++;
  }

  if (counter1 < input1.length) {
    // result.push()
    result = u(input1, counter1, input1.length, result);
  } else if (counter2 < input2.length) {
    result = u(input2, counter2, input2.length, result);
  }

  return result;
}

console.log(mergeSortedArray(input2, input1));
