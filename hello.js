function calculateDiscount(price, discount) {
  if (discount == null) {  // Issue: Use strict equality (===) for comparison
    discount = 0.1;        // Issue: Hardcoded default discount value, avoid magic numbers
  }

  var finalPrice = price - price * discount; // Issue: Use `let` or `const` instead of `var`
  finalPrice = finalPrice.toFixed(2); // Issue: toFixed() returns a string, which may cause type issues

  if (finalPrice < 0) {
    console.log("Error: Price cannot be negative");  // Issue: Use `throw` for error handling
    return 0;
  }

  return finalPrice;
}

console.log(calculateDiscount(100)); // Issue: Unhandled default value for second argument
