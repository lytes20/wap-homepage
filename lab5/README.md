## Table of Contents

- [Question 1](#question-1)
- [Question 2](#question-2)
- [Question 3](#question-3)

## Question 1

```javascript
let str = "Greetings, ";
let user = {
  firstName: "John",
  lastname: "Smith",
  display: function () {
    console.log(str, this.firstName);
    show("hi");
  },
};
user.display();
function show(msg) {
  console.log(msg + " " + this.lastname);
}
show.call(user, "hello");
```

#### Creation Phase

##### Global Execution Context (GEC) Creation

- **Outer:** null
- **this:** window
- **Lexical Environment:** `{show: <function>}`
- **TDZ:** `[str, user]`

#### Execution Phase

##### Global Execution Context (GEC) Execution

- **Outer:** null
- **this:** window
- **Lexical Environment:** `{str: "Greetings, ", user: <object>, show: <function>}`
- **TDZ:** `[]` (empty as all variables are initialized)
- `user.display()` is called

##### Method 'display' Execution Context Creation

- **Outer:** global
- **this:** user (because it's called as a method on user object)
- **Lexical Environment:** `{arguments: <object>}`
- **TDZ:** `[]`

##### Method 'display' Execution Context Execution

- `console.log(str, this.firstName)` - outputs "Greetings, John"
  - `str` is found in global scope
  - `this.firstName` is "John" because `this` refers to `user` object
- `show("hi")` is called as a regular function

##### Function 'show' Execution Context Creation (First Call)

- **Outer:** global
- **this:** window (because it's called as a regular function)
- **Lexical Environment:** `{arguments: <object>, msg: "hi"}`
- **TDZ:** `[]`

##### Function 'show' Execution Context Execution (First Call)

- `console.log(msg + " " + this.lastname)` - outputs "hi undefined"
  - `msg` is "hi"
  - `this.lastname` is `undefined` because `this` is `window` and `window.lastname` doesn't exist

##### Back to Global Execution Context

- `show.call(user, "hello")` - calls `show` with explicit `this` context set to `user`

##### Function 'show' Execution Context Creation (Second Call)

- **Outer:** global
- **this:** user (explicitly set via .call())
- **Lexical Environment:** `{arguments: <object>, msg: "hello"}`
- **TDZ:** `[]`

##### Function 'show' Execution Context Execution (Second Call)

- `console.log(msg + " " + this.lastname)` - outputs "hello Smith"
  - `msg` is "hello"
  - `this.lastname` is "Smith" because `this` is explicitly set to `user`

### Final Output

```
Greetings, John
hi undefined
hello Smith
```

## Question 2

```javascript
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
```

### Execution Step-by-Step

#### Creation Phase

##### Global Execution Context (GEC) Creation

- **Outer:** null
- **this:** window
- **Lexical Environment:** `{askPassword: <function>}`
- **TDZ:** `[user]`

#### Execution Phase

##### Global Execution Context (GEC) Execution

- **Outer:** null
- **this:** window
- **Lexical Environment:** `{askPassword: <function>, user: <object>}`
- **TDZ:** `[]`
- `askPassword(user.loginOk, user.loginFail)` is called

##### Function 'askPassword' Execution Context Creation

- **Outer:** global
- **this:** undefined (strict mode)
- **Lexical Environment:** `{arguments: <object>, ok: <function reference>, fail: <function reference>}`
- **TDZ:** `[password]`

##### Function 'askPassword' Execution Context Execution

- `let password = prompt("Password?", "")` - let's assume the user enters "rockstar"
- `if (password == "rockstar")` evaluates to true
- `ok()` is called (this is `user.loginOk` passed by reference)

##### Method 'loginOk' Execution Context Creation

- **Outer:** global
- **this:** undefined (In strict mode when called as a function)
- **Lexical Environment:** `{arguments: <object>}`
- **TDZ:** `[]`

##### Method 'loginOk' Execution Context Execution

- `alert(${this.name} logged in)` - attempts to access `this.name`
- ERROR: `this` is `undefined` (the method lost its context when passed as a callback)
- **Uncaught TypeError: Cannot read property 'name' of undefined**

### Error Analysis

The error occurs because when methods are passed as callbacks, they lose their original `this` context:

1. `user.loginOk` is a method that uses `this` to refer to the `user` object
2. When passed to `askPassword` as a parameter, only the function reference is passed, without the object
3. When called as `ok()` inside `askPassword`, it's a regular function call (not a method call)
4. In strict mode, regular function calls have `this` set to `undefined`

### Fixed Code

```javascript
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

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
```

## Question 3:

### Fixed code

```javascript
"use strict";
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    this.students.forEach(
      function (student) {
        console.log(this.title + ": " + student);
      }.bind(group)
    );
  },
};
group.showList();
```
