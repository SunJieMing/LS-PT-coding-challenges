const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const lessThanPivot = [];
  const greaterThanPivot = [];
  const pivot = arr.splice(Math.floor(Math.random() * arr.length), 1);

  for (let i = arr.length - 1 ; i >= 0; i--){
    if ( arr[i] <= pivot) {
      lessThanPivot.push(arr[i]);
    } else {
      greaterThanPivot.push(arr[i]);
    }
  }

  const c = [];

return c.concat(quickSort(lessThanPivot), pivot, quickSort(greaterThanPivot));

};

const nums = [0, 15, -33, .5, 44, 12, 1, 0, 8, 7, 1056];
console.log(quickSort(nums));
