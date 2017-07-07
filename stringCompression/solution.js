// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

const compressString = (string) => {
  let currentChar = null;
  let compressedString = '';
  let charCount = 1;
  for (let i = 0; i <= string.length; i++) {
    if (string[i] === currentChar) charCount++;
    if (currentChar === null) currentChar = string[i];
    if (string[i] !== currentChar || string[i] === undefined) {
      compressedString += currentChar;
      compressedString += charCount;
      charCount = 1;
      currentChar = string[i];
    }
  }
  return compressedString.length > string.length ? string : compressedString;
};

console.log(compressString('a'));
console.log(compressString('abcde'));
console.log(compressString('aaaaabbbccd'));
console.log(compressString('aaaaabbbccddeeffgg'));
console.log(compressString('aaaaaaaaaaaaa'));
