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
  const arr = nums.slice();
  let start = 0
  let end = arr.length;

  while (start <= end) {
    let middle = Math.floor((start+end)/2);
    if (arr[middle] === target) return middle;
    if (arr[middle] > target) {
      end = (middle - 1);
    } else {
      start = (middle + 1);
    }
  }
  return undefined;
};
