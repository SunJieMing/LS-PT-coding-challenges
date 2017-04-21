
/*
 * Write a function that takes an array and removes all duplicate items.
 * [1, 1, 1, 2, 2, 3, 4, 5, 5] -> [1, 2, 3, 4, 5]
 *
 */
const removeDuplicates = (arr) => {
	//code here...
  let noDuplicates = [];
    return arr.filter((n) => noDuplicates.hasOwnProperty(n) ? false: (noDuplicates[n] = true));
};
