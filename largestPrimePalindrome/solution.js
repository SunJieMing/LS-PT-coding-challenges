const primePalindrome = (limit) => {
  const isPrime = (num) => {
    const upperLimit = Math.sqrt(num);
    if (num % 2 === 0) return false;
    for (let i = 3; i <= upperLimit; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const isPalindrome = (num) => (parseInt(num.toString().split('').reverse().join('')) === num);

  if (limit % 2 === 0) limit = limit-1;
  
  for (let i = limit; i >= 0; i -= 2) {
    if (isPalindrome(i) && isPrime(i)) return i;
  }
};

console.log(primePalindrome(1000));
