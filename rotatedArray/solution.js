/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(n))
 */

const rotatedArraySearch = (array, elementIndex) => {
  let low = 0;
  // low is always 0
  let high = array.length - 1;
  // high is end of the array's length - 1
  while (low <= high) {
    // loop backwards over the array, update mid as we go
    const mid = Math.floor((low+high)/2);
    // mid is set up to be the middle point intially.
    if (array[mid] === elementIndex) {
      return mid;
      // if middle is found then we're done!
    }
    else if (array[low] <= array[mid]) {
      // if our lowest point is still lower than the middle index update lows and highs based on next condition
      if (array[low] <= elementIndex && elementIndex < array[mid]) {
        // this condition allows us to check if low is still lower than the index and less than the middle
        high = mid - 1;
        // if it is, then high becomes middle m - 1 descending array
      }
      else {
        // otherwise move to the right and update low to become mid + 1 ascending
        low = mid + 1;
      }
    }
    // last case is just going to do the opposite of what we did above.
    else {
      if (array[mid] < elementIndex && elementIndex <= array[high]) {
        low = mid + 1;
      }
      else {
        high = mid - 1; 
      }
    }
  }
  return null;
}

console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2)); // -> 5
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100)); // -> null
