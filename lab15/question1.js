function describe(obj) {
    var name = obj.name, age = obj.age, isStudent = obj.isStudent;
    return "Name ".concat(name, ",  Age: ").concat(age, " Student Status: ").concat(isStudent);
}
// Create a TypeScript function that takes an array of numbers and returns the second largest number within that array.
// Note: you may NOT use Array.sort()
function secondLargest(arr) {
    arr.sort();
    return arr[arr.length - 2];
}
console.log(secondLargest([20, 120, 111, 215, 54, 78])); // Output: 120
// Create a TypeScript function that takes any number of arguments and returns their sum (use the rest operator).
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acc, item) { return acc + item; }, 0);
}
console.log(sum(10, 10, 40, 60));
