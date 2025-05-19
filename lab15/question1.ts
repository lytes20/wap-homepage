// Define a TypeScript function that takes an object with the following properties: name (string), age (number),
// and isStudent (boolean). The function should return a string describing the person.
type TStudent = { name: string; age: number; isStudent: boolean };
function describe(obj: TStudent): string {
  const { name, age, isStudent } = obj;
  return `Name ${name},  Age: ${age} Student Status: ${isStudent}`;
}

// Create a TypeScript function that takes an array of numbers and returns the second largest number within that array.
// Note: you may NOT use Array.sort()
function secondLargest(arr: number[]): number | null {
  if (arr.length < 2) {
    return null;
  }
  let max: number = -Infinity;
  let nextMax: number = -Infinity;
  arr.forEach((num) => {
    if (num > max) {
      max = num;
      nextMax = num;
    } else if (num > nextMax && num < nextMax) {
      nextMax = num;
    }
  });

  return nextMax === -Infinity ? null : nextMax;
}
console.log(secondLargest([20, 120, 111, 215, 54, 78])); // Output: 120

// Create a TypeScript function that takes any number of arguments and returns their sum (use the rest operator).
function sum(...args: number[]): number {
  return args.reduce((acc, item) => acc + item, 0);
}
console.log(sum(10, 10, 40, 60));

// Given two arrays:
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// Use the spread operator to concatenate them into a single array.

function combineArrays(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}
