/* While Loop Solution */
const binarySearch = (nums, target) => {
	let min = 0;
	let max = nums.length - 1;
  let guessIndex;

  while(min <= max) {
    guessIndex = Math.floor((min + max) / 2);
    if (nums[guessIndex] === target) return guessIndex;
    if (nums[guessIndex] > target) {
      max = guessIndex - 1;
    } else {
      min = guessIndex + 1;
    }
  }

	return -1;
};

/* Recursive Solution */
const binarySearch = (nums, target) => {
	let min = 0;
	let max = nums.length - 1;
  let guessIndex = Math.floor((min + max) / 2);

  const checkGuess = () => {
    if (min > max) return -1;
    if (nums[guessIndex] === target) return guessIndex;
    if (nums[guessIndex] > target) {
      max = guessIndex - 1;
    } else {
      min = guessIndex + 1;
    }
    guessIndex = Math.floor((min + max) / 2);
    return checkGuess();
  };

  return checkGuess()
};
