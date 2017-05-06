/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

 const reverseCase = (str) => {
   let result = '';
   for (let i = 0; i < str.length; i++) {
     let char = str[i].charCodeAt();
     if (char >= 65 && char <= 90) {
       result += String.fromCharCode(char+32)
     } else if (char >= 97 && char <= 122) {
       result += String.fromCharCode(char-32)
        } else {
          result += str[i];
        }
   }
   return result;
 }
 
