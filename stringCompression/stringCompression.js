// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

const stringCompression = (str) => {
  const result = [];
  let letter = 0;
  let count = 1;

  result[letter] = str[0];
  result[count] = 1;

  for (let i = 1; i < str.length; i++) {
    if (result[letter] === str[i]) {
      result[count] = result[count] + 1;
    } else {
      letter = letter + 2;
      count = count + 2;
      result[letter] = str[i];
      result[count] = 1;
    }
  }
  if (str.length <= result.length) {
    return str;
  } else {
      let newString = result.toString();
      newString = newString.replace (/,/g, "");
      return newString;
  }
}
