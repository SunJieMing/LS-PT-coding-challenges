// [1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1] -> 4

// create an object
// iterate over arr
  // add item to object if key does not exist
  // if key exists increment count value
// iterate over arr
  // check if number has an even count value on the object
// return first even value

const firstEven = (numbers) => {
  const numCount = {};
  numbers.forEach(num => {
    if (numCount[num]) return numCount[num] = numCount[num] + 1;
    numCount[num] = 1;
  });
  for (let i = 0; i < numbers.length; i++) {
    let count = numCount[numbers[i]];
    if (count % 2 === 0) return numbers[i];
  }
};

console.log(firstEven([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]));
