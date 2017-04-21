/*
 * Write a function that takes an array and removes all duplicate items.
 * [1, 1, 1, 2, 2, 3, 4, 5, 5] -> [1, 2, 3, 4, 5]
 *
 */
const removeDuplicates = (arr) => {
  const result = arr[0]
  for (let i = 1; i < arr.length, i++) {
    if (arr[i] !== arr[i-1]) result.push(arr[i]);
  }
  return result;
};
