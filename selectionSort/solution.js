const selectionSort = (arr) => {
  let smallestIndex;
  for (let i = 0; i < arr.length; i++) {
    smallestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallestIndex] > arr[j]) smallestIndex = j;
    }
    if (arr[smallestIndex] === arr[i]) continue;
    let temp = arr[smallestIndex];
    arr[smallestIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
};
