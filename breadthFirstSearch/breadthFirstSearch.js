/*
 * Write a function that accepts a tree data structure and a value to search for.
 * Search for the value using a breadth-first search algorithm.
 * Example:
 * const tree = {
 *	x: 1,
 *	y: 1,
 *	z: {
 *		x: 1,
 *		y: 1,
 *		z: 1,
 *		},
 *	a: 2,
 * };
 * breadthFirstSearch(tree, 2);// will return true before it recursively searches `z`
 */


 const isObject = (obj) => {
   return obj === Object(obj);
 }

 const breadthFirstSearch = (treeToSearch, item) => {
   let treeArray = Object.values(treeToSearch);
   let treeList = [];

   for (let i = 0; i < treeArray.length; i++) {
     if (isObject(treeArray[i])) {
       treeList.push(treeArray[i]);
     } else {
       if (treeArray[i] === item) return true;
     }
   }

   let limit = treeList.length;

   for (let j = 0; j < limit; j++) {
     return breadthFirstSearch(treeList.pop(), item);
   }
   return false;
 }
