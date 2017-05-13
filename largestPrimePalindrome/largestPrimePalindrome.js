/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */

const isPalindrome = (num) => {
  const revNum = num.toString().split('').reverse().join('');
  return (num === (revNum*1)); // convert revNum from String to Number
 }

const isPrime = (num) => {
  //return true if num is prime.
  //otherwise return false

  //note: 0 and 1 are NOT considered prime numbers
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const largestPrimePalindrome = (limit) => {
  let result;
  for (let i = 1; i < limit; i++) {
    if (isPalindrome(i)) {
      if (isPrime(i)) {
        result = i;
      }
    }
  }
  return result;
}
