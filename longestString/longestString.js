/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

 const longestString = (strArray) => {
   let longestStr = '';
   for (let i = (strArray.length - 1); i >= 0; i--) {
     if (strArray[i].length > longestStr.length) {
       longestStr = strArray[i];
     }
   }
   return longestStr;
 };
