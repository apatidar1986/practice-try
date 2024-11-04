/**
 * 
Your e-commerce site dynamically updates a user’s shopping cart each time they add a 
product. The products need to be sorted by price to ensure users always see items in 
increasing price order. If a new product is added or removed frequently, which sorting 
strategy will allow you to maintain an efficiently sorted cart without re-sorting the entire list?
 */
function insertProduct(cart, newProduct) {
  const { price } = newProduct;

  // Binary search to find the correct position
  let left = 0;
  let right = cart.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (cart[mid].price === price) {
      left = mid;
      break;
    } else if (cart[mid].price < price) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // Insert the new product at the found position
  cart.splice(left, 0, newProduct);
}

function removeProduct(cart, productId) {
  // Find product by ID and remove it
  let indexToRemove = cart.findIndex((product) => product.id === productId);
  if (indexToRemove !== -1) {
    cart.splice(indexToRemove, 1);
  }
}

// Example usage:
let cart = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 30 },
  { id: 3, name: "Product 3", price: 50 },
];

let newProduct = { id: 4, name: "Product 4", price: 25 };

insertProduct(cart, newProduct);
console.log(cart); // Should show products sorted by price in ascending order

removeProduct(cart, 2); // Remove Product 2 by id
console.log(cart); // Should show the cart with the remaining products in sorted order
