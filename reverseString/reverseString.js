/*
  Write a function that accepts a string and returns a reversed copy of it.
  'Hello World' -> 'dlroW olleH'
*/

const reverseString = (str) => {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
};
