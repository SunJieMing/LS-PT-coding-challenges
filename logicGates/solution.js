const NAND = (x, y) => {
  return !(x && y) ? 1 : 0;
};

// console.log(NAND(0, 0));

const NOT = (n) => {
  return NAND(n, n);
};

// console.log(NOT(1));

const AND = (x, y) => {
  return NAND(NAND(x, y), NAND(x, y));
};

// console.log(AND(1, 1));

const OR = (x, y) => {
  return NAND(NAND(x, x), NAND(y, y));
};

// console.log(OR(1, 0));

const XOR = (x, y) => {
  return NAND(NAND(x, NAND(x, y)), NAND(NAND(x, y), y));
};

// console.log(XOR(1, 0));
