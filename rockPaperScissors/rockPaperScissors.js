/*
 * * Write a function that generates every sequence of throws a single
 * * player could throw over a three-round game of rock-paper-scissors.
 * *
 * * Your output should look something like:
 * *   [["rock", "rock", "rock"],
 * *    ["rock", "rock", "paper"],
 * *    ["rock", "rock", "scissor"],
 * *    ["rock", "paper", "rock"],
 *              ...etc...
 *                   */

// newString = str[i] + newString;
// return str.split('').reverse().join('');

const permute = (arr) => {
  let result = [];

  if (arr.length === 3) {
    result.push(arr);
  }
  return result;
  };

const rockPaperScissors = () => {
  const options = ['rock ', 'paper ', 'scissors '];
  let result = [];

  options.forEach((element) => {
    result.push(permute(element));
  });

 return result;
}
