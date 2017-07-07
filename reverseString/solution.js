const reverseString = (str) => {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
//   for (let i = 0; i < str.length; i++) {
//     newString += str[i];
//   }
  return newString;
// return str.split('').reverse().join('');
};

const reversedString = reverseString('Hello World');

console.log(reversedString);
