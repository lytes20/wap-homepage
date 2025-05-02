// let str = "Greetings, ";
// let user = {
//   firstName: "John",
//   lastname: "Smith",
//   display: function () {
//     console.log(str, this.firstName);
//     show("hi");
//   },
// };
// user.display();
// function show(msg) {
//   console.log(msg + " " + this.lastname);
// }
// show.call(user, "hello");

"use strict";
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk, user.loginFail);
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// "use strict";
// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList: function () {
//     this.students.forEach(
//       function (student) {
//         console.log(this.title + ": " + student);
//       }.bind(group)
//     );
//   },
// };
// group.showList();
