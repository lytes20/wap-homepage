// "use strict";
// let x;
// var a = 5;
// var b = 10;
// var c = function (a, b, c) {
//   document.write(x);
//   document.write(a);
//   var f = function (a, b, c) {
//     b = a;
//     document.write(b);
//     b = c;
//     var x = 5;
//   };
//   f(a, b, c);
//   document.write(b);
//   var x = 10;
// };
// c(8, 9, 10);
// document.write(b);
// document.write(x);

// var x = 9;
// function myFunction() {
//   return x * x;
// }
// document.write(myFunction());
// x = 5;
// document.write(myFunction());

var foo = 1;
function bar() {
  if (!foo) {
    var foo = 10;
  }
  alert(foo);
}
bar();
