/*
 * Sort an array of numbers using selection sort.
 * https://en.wikipedia.org/wiki/Selection_sort
 * https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/sorting
 *
 * [1, 6, 2, 5, 3, 4] -> [1, 2, 3, 4, 5, 6]
 */

const selectionSort = (arr) => {
  let indexMin;

  for (let i = 0; i < arr.length; i++) {
    indexMin = i;

    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) indexMin = j;
    }
    if (indexMin !== i) {
      let temp = arr[i];
      arr[i] = arr[indexMin];
      arr[indexMin] = temp;
    }
  }
  return arr;
}
