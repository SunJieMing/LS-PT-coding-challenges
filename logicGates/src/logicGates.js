/*
 * For this coding challenge you will be recreating low level logic gates.
 * You will first create the NAND function and then you will create
 * NOT, OR, AND, and XOR all using the NAND function that you created.
 * Implement NAND however you would like and then use NAND to implement the
 * other logic gates.
 * See the link below for the truth tables for these logic gates.
 * https://en.wikipedia.org/wiki/NAND_logic#NAND
 * All functions should return a 1 for true and a 0 for false.
 */

const NAND = (x, y) => {
	// You can use whatever JS operators that you would like: &&, ||, !
  let result = x+y;
  if (result === 2) {
    return 0;
  } else {
    return 1;
  }
};

const NOT = (n) => {
	// Do not use !, &&, or ||
  if (n === 0) {
    return 1;
  } else {
    return 0;
  }
};

const AND = (x, y) => {
	// Do not use &&, ||, or !
	// You can use any of the functions that you have already written

  // NOT[ NOT( A AND B ) AND NOT( A AND B ) ]
  return(NOT(NAND(x,y)));
};

const OR = (x, y) => {
	// Do not use ||, &&, or !
	// You can use any of the functions that you have already written

  // NOT[ NOT( A AND A ) AND NOT( B AND B )]
  return NOT(AND(NOT(AND(x,x)),NOT(AND(y,y))));
};

const XOR = (x, y) => {
	// Do not use ||, &&, or !
	// You can use any of the functions that you have already written

  // NOT{ NOT[ A AND NOT( A AND B ) ] AND NOT[ B AND NOT( A AND B ) ] }
  return ( NOT( AND(NOT(AND(x,NOT(AND(x,y)))) , NOT(AND(y,NOT(AND(x,y))))) ) );
};

module.exports = {
  NAND: NAND,
  NOT: NOT,
  AND: AND,
  OR: OR,
  XOR: XOR
};
