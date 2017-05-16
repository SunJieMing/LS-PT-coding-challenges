/*
 * Given a sorted array, find the index of the specified element
 * using binary search.
 * https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
 * https://en.wikipedia.org/wiki/Binary_search_algorithm
 * */

/**
 *  * const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
 *	* console.log(index); // 1
**/

const binarySearch = (nums, target) => {
  let workArray = nums.slice();
  let middle = Math.floor(workArray.length/2);

  if (workArray[middle] === target) return middle;

  if (workArray[middle] > target) {
    if (middle === 0) return undefined;
    return binarySearch(workArray.slice(0, middle), target);
  }
  else {
    if (middle === 0) return undefined;
    return binarySearch(workArray.slice(middle), target);
  }
  return undefined;
};
