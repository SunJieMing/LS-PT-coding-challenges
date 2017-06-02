/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use + and - to implement these functions.
 *
 */

 const multiply = (x, y) => {
   let result = 0;
   for (let i = 1; i <= y; i++) {
     result += x;
   }
   return result;
 }

 const divide = (x,y) => {
   let result = x;
   for (let i = 1; i <= x; i++) {
     result -= y;
     if (result === 0) {
       return i;
     }
   }
 }

 const modulo = (x,y) => {
   let result = x;
   for (let i = 1; i <= x; i++) {
     result -= y;
     if (result < y) {
       return result;
     }
     if (result === 0) {
       return 0;
     }
   }
 }
