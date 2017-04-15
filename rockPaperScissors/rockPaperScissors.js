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

 const rockPaperScissors = (roundsToPlay) => {
   let rps = ["rock", "paper", "scissors"];
   let final = [];
   const getNextSequence = (rounds, newSequence) => {
     if (rounds === 3) {
     final.push(newSequence);
     return newSequence;
   }
   rps.forEach(function (sequence) {
     getNextSequence(rounds + 1, newSequence.concat(sequence))
   })
 }
 getNextSequence(0, []);
 return final;
 }
 //console.log(rockPaperScissors(3));
 /*
 rockPaperScissors takes an argument: roundsToPlay
 rps: an array of all elements
 final: an empty container for the final result.
 getNextSequence takes two arguments, the number of rounds played and the newSequence to be added to the final results.
 If three rounds have been played the last newSequence is pushed to the final array and that array is returned with all the possible combinations.
 rps.forEach creates the next newSequence by adding one to the number of rounds played and concatenating newSequence with (getNextSequence).
 */
