/*
  Write a function that accepts a string and returns a reversed copy of it.
  'Hello World' -> 'dlroW olleH'
*/

const reverseString = (str) => {
  let reverse = '';
  for (let i = (str.length - 1); i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};
