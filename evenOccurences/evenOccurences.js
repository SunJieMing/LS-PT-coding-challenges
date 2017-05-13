/*
 *  * Find the first item that occurs an even number of times in an array.
 *   * Remember to handle multiple even-occurance items and return the first one.
 *    * Return null if there are no even-occurance items.
 *    */

/*
 *  * example usage:
 *   * const onlyEven = evenOccurence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 *    * console.log(onlyEven); //  4
 *    */

 const isEven = (num) => {
    return (num%2 === 0);
  }

 const evenOccurence = (arr) => {
   if (arr.length === 0) return null;

   let result = [];

   for (let i = 0; i < arr.length; i++) {
     let id = arr[i].toString();
     if (result[id]) {
       result[id] = result[id]+1;
     } else {
       result[id] = 1;
     }
   }

   for (let i = 0; i < arr.length; i++) {
     let index = arr[i];
     if (isEven(result[index])) return index;
   }
   return null;
 };
