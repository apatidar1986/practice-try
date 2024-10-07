//Elaborate a function to embed an element at a specified locus in a given array.

function addAtLocation(dataset, location, target) {
  const updatedArray = [...dataset];
  updatedArray.splice(location, 0, target);
  return updatedArray;
}

// console.log(addAtLocation([1, 5, 16, 2], 2, 25));

console.log(addAtLocation([1, 5, 16, 2], -8, 25));

console.log(addAtLocation([1, 5, 16, 2], -1, 25)); // Output: [1, 5, 16, 25, 2]
console.log(addAtLocation([1, 5, 16, 2], 10, 25)); // Output: [1, 5, 16, 2, 25]
console.log(addAtLocation([1, 5, 16, 2], 0, 25)); // Output: [25, 1, 5, 16, 2]
