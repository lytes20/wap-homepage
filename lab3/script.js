"use strict";

import {
  add_item,
  delete_item_by_id,
  get_item_title_by_id,
  get_items,
  update_item_title_by_id,
} from "./data.js";

// 1a
function computeSumOfSquares(numbers) {
  return numbers.reduce((acc, item) => acc + Math.pow(item, 2), 0);
}

// console.log(
//   " computeSumOfSquares([1,2,3]) -> ",
//   computeSumOfSquares([1, 2, 3])
// );

// 1 b
function printOddNumbersOnly(numbers) {
  numbers.forEach((num) => {
    if (num % 2 != 0) {
      console.log(num);
    }
  });
}
// printOddNumbersOnly([1, 2, 3, 4]);

// 1 c
function printFibo(n, a, b) {
  for (let i = 0; i < n; i++) {
    console.log(a);
    a = b;
    b = a + b;
  }
}

// printFibo(10, 0, 1);

let user = { name: "John", years: 30 };
const { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

// --------------------
// Question 3
let libraryBooks = [
  { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
  { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
  { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    ID: 3257,
  },
];
function addBook(title, author, ID) {
  const book = libraryBooks.find((book) => book.ID === ID);
  if (book) {
    console.log("Book already exists");
  } else {
    libraryBooks.push({ title, author, ID });
  }
}
// addBook("The Road Ahead", "Bill Gates", 1235);
// addBook("Zero to One", "Peter Thiel", 4578);
// console.log(libraryBooks);

function getTitles() {
  return libraryBooks
    .map((libraryBook) => libraryBook.title)
    .sort((a, b) => a.localeCompare(b));
}

// console.log(getTitles());

function findBooks(title) {
  return libraryBooks
    .filter((libraryBook) =>
      libraryBook.title.toLowerCase().includes(title.toLowerCase())
    )
    .sort((a, b) => a.ID - b.ID);
}

// console.log(findBooks("road"));
// End of question 3 ----------

// Question 4
const items = get_items();
console.log("items", items);

console.log(add_item({ title: "Zero to One", id: 400 }));
console.log(add_item({ title: "The Road Ahead", id: 200 }));
console.log(add_item({ title: "Steve Jobs", id: 500 }));
console.log(get_items());
console.log(add_item({ title: "Zero to One", id: 400 }));
console.log(get_items());
console.log("Updating title -- ");
console.log(update_item_title_by_id(700, "Growth Mindset"));
console.log(get_items());
console.log("Deleting item -- ");
console.log(delete_item_by_id(400));
console.log(get_items());

console.log(get_item_title_by_id(500));
