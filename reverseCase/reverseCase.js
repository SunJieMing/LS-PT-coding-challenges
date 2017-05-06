/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

 const isUpperCase = (str) => {
   return str === str.toUpperCase();
 }

 const reverseCase = (str) => {
   let result = '';
   for (let i = 0; i < str.length; i++) {
     let char = str[i];
     if (isUpperCase(char)) {
       result += char.toLowerCase();
     } else {
       result += char.toUpperCase();
     }
   }
   return result;
 }
 
