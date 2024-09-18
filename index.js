// Calculate Difference
function handleCalculateDifference() {
  const num1 = parseFloat(document.getElementById("diffNum1").value);
  const num2 = parseFloat(document.getElementById("diffNum2").value);
  const result = calculateDifference(num1, num2);
  document.getElementById("diffResult").textContent = `Difference: ${result}`;
}

function calculateDifference(a, b) {
  return a - b;
}

// Is Odd
function handleIsOdd() {
  const num = parseInt(document.getElementById("oddNum").value);
  const result = isOdd(num) ? "Odd" : "Even";
  document.getElementById("oddResult").textContent = result;
}

function isOdd(number) {
  return number % 2 !== 0;
}

// Find Min
function handleFindMin() {
  const array = document
    .getElementById("minArray")
    .value.split(",")
    .map(Number);
  const result = findMin(array);
  document.getElementById("minResult").textContent = `Minimum: ${result}`;
}

function findMin(arr) {
  return Math.min(...arr);
}

// Filter Even Numbers
function handleFilterEvenNumbers() {
  const array = document
    .getElementById("evenArray")
    .value.split(",")
    .map(Number);
  const result = filterEvenNumbers(array);
  document.getElementById(
    "evenResult"
  ).textContent = `Even Numbers: ${result.join(", ")}`;
}

function filterEvenNumbers(arr) {
  return arr.filter((number) => number % 2 === 0);
}

// Sort Array Descending
function handleSortArray() {
  const array = document
    .getElementById("sortArray")
    .value.split(",")
    .map(Number);
  const result = sortArrayDescending(array);
  document.getElementById(
    "sortResult"
  ).textContent = `Sorted Descending: ${result.join(", ")}`;
}

function sortArrayDescending(arr) {
  return arr.sort((a, b) => b - a);
}

// Lowercase First Letter
function handleLowercaseFirstLetter() {
  const str = document.getElementById("lowercaseString").value;
  const result = lowercaseFirstLetter(str);
  document.getElementById("lowercaseResult").textContent = result;
}

function lowercaseFirstLetter(str) {
  return str[0].toLowerCase() + str.slice(1);
}

// Count Vowels
function handleCountVowels() {
  const str = document.getElementById("vowelString").value;
  const result = countVowels(str);
  document.getElementById(
    "vowelResult"
  ).textContent = `Vowels Count: ${result}`;
}

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Find Average
function handleFindAverage() {
  const array = document
    .getElementById("averageArray")
    .value.split(",")
    .map(Number);
  const result = findAverage(array);
  document.getElementById("averageResult").textContent = `Average: ${result}`;
}

function findAverage(arr) {
  const total = arr.reduce((sum, num) => sum + num, 0);
  return total / arr.length;
}
