const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let j;
    for (j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
};
