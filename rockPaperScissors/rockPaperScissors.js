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

const rockPaperScissors = () => {
  const options = ['rock ', 'paper ', 'scissors '];
  let result = [];

  options.forEach((option) => {
    for (let i = 0; i < options.length; i++) {
			for (let j = 0; j < options.length; j++) {
				result.push([option, options[i], options[j]]);
			}
		}
  });

 return result;
}
