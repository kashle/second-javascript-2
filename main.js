// String Manipulation Functions

// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Count Characters
  function countCharacters(str) {
    return str.length;
  }
  
  // Capitalize Words
  function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  // Array Functions
  
  // Find Maximum
  function findMaximum(arr) {
    return Math.max(...arr);
  }
  
  // Find Minimum
  function findMinimum(arr) {
    return Math.min(...arr);
  }
  
  // Sum of Array
  function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Filter Array
  function filterArray(arr, condition) {
    return arr.filter(condition);
  }
  
  // Mathematical Functions
  
  // Factorial
  function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
  }
  
  // Prime Number Check
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
  
    return true;
  }
  
  // Fibonacci Sequence
  function fibonacciSequence(numTerms) {
    const sequence = [0, 1];
    for (let i = 2; i < numTerms; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
  
  // Testing the functions
  console.log(reverseString("hello")); // Output: "olleh"
  console.log(countCharacters("hello")); // Output: 5
  console.log(capitalizeWords("hello world")); // Output: "Hello World"
  
  const numbers = [2, 5, 1, 8, 4];
  console.log(findMaximum(numbers)); // Output: 8
  console.log(findMinimum(numbers)); // Output: 1
  console.log(sumArray(numbers)); // Output: 20
  console.log(filterArray(numbers, num => num > 3)); // Output: [5, 8, 4]
  
  console.log(factorial(5)); // Output: 120
  console.log(isPrime(7)); // Output: true
  console.log(fibonacciSequence(6)); // Output: [0, 1, 1, 2, 3, 5]
  