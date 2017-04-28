
/*
 * Sort an array of numbers using selection sort.
 * https://en.wikipedia.org/wiki/Selection_sort
 * https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/sorting
 *
 * [1, 6, 2, 5, 3, 4] -> [1, 2, 3, 4, 5, 6]
 */

 const selectionSort = (arr) => {

   const swap = (x, y) => {
     var t = x;
     x = y;
     y = t;
     return [x, y];
   };

   for (let i = 0; i < arr.length; i++) {
     let smallest = i;
     
     for (let j=i+1; j < arr.length; j++) {

       if (arr[j] < arr[i]) {
         smallest = j;
       }

       if (i != smallest) {
         swap(arr, i, smallest);
       }

     }
     return arr;
   };

 };
