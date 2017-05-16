// [10, 30, 5, 1, 99, 4, 9104, 32, 0, -4, 23, 0.45]

// do while (swappedValue === true)
  // set swappedValue = false
  // iterate over arr
    // if left is greater than right
      // swap them
      // set swappedValue to true
// return sorted array

const bubbleSort = (arr) => {
  arr = arr.slice();
  let swappedValue;
  do {
    swappedValue = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swappedValue = true;
      }
    }
  } while(swappedValue);
  return arr;
};

console.log(bubbleSort([10, 30, 5, 1, 99, 4, 9104, 32, 0, -4, 23, 0.45]));
