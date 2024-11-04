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

/// Your e-commerce site dynamically updates a user’s shopping cart each time they add a product. The products need to be sorted by price to ensure users always see items in increasing price order. If a new product is added or removed frequently, which sorting strategy will allow you to maintain an efficiently sorted cart without re-sorting the entire list?
