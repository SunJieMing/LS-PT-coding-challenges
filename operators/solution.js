const multiply = (x, y) => {
  absX = Math.abs(x);
  absY = Math.abs(y);
  let product = 0;
  for (let i = 0; i < absX; i++) {
    product += absY;
  }
  if (x < 0 && y < 0) return product;
  if (x < 0 || y < 0) return 0 - product;
  return product;
};

const divide = (x, y) => {
  let quotient = 0;
  while (x > 0) {
    x -= y;
    if (x >= 0) quotient += 1;
  }
  return quotient;
};

const modulo = (x, y) => {
  while (x >= y) x -= y;
  return x;
};

console.log(multiply(15, 10));
console.log(divide(15, 5));
console.log(modulo(15, 7));
