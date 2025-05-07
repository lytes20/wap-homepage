"use strict";
function isPrime(n) {
  return new Promise(function (resolve, reject) {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
      if (n % i === 0) reject(false);
    resolve(n > 1);
  });
}

console.log("start");
async function checkPrime(n) {
  try {
    const result = await isPrime(n);
    console.log({ prime: result });
  } catch (err) {
    console.log({ prime: err });
  }
}
checkPrime(7);
console.log("end");
