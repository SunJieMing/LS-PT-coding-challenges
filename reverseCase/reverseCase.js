/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

 const reverseCase = (str) => {
   let split = str.split('');
   let cased = '';
   split.forEach(letter => {
     if (letter.toLowerCase() === letter) {
       cased += letter.toUpperCase();
     } else {
       cased += letter.toLowerCase();
     }
   })
   return cased;
 }
