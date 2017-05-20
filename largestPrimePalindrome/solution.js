const primePalindrome = () => {
  const isPrime = (num) => {
    const upperLimit = Math.sqrt(num);
    if (num % 2 === 0) return false;
    for (let i = 3; i <= upperLimit; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const isPalindrome = (num) => (parseInt(num.toString().split('').reverse().join('')) === num);

  for (let i = 1000; i >= 0; i--) {
    if (isPalindrome(i) && isPrime(i)) return i;
  }
};

console.log(primePalindrome());
