/* Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

 const isUnique = (str) => {
   let length = str.length;
   if (length === 0) return false;
   if (length === 1) return true;

   for(let i = 0; i < length; i++) {
     for (let j = 1; j < length; j++) {
       if (str[i] === str[j] && i !== j) {
         return false;
       }
     }
   }
   return true;
 }


 const isUnique = (str) => {
   let mySet = new Set(str);
   if(str.length !== mySet.size) return false;
   return true;
 }
