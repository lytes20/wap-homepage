# Code 1 Analysis

```javascript
let x;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  document.write(x);
  document.write(a);
  var f = function (a, b, c) {
    b = a;
    document.write(b);
    b = c;
    var x = 5;
  };
  f(a, b, c);
  document.write(b);
  var x = 10;
};
c(8, 9, 10);
document.write(b);
document.write(x);
```

## Execution Step-by-Step

### Creation Phase

#### Global Execution Context (GEC) Creation

- **Outer:** null
- **Lexical Environment:** `{a: undefined, b: undefined, c: undefined}`
- **TDZ:** `{x: <uninitialized>}`
- **this:** window

### Execution Phase

#### Global Execution Context (GEC) Execution

- `let x` - x is initialized with `undefined`
- `var a = 5` - a is assigned 5
- `var b = 10` - b is assigned 10
- `var c = function...` - c is assigned function reference
- **Updated Lexical Environment:** `{x: undefined, a: 5, b: 10, c: <function>}`
- `c(8, 9, 10)` - function c is called

#### Function 'c' Execution Context (FEC) Creation

- **Outer:** Global
- **arguments:** {0: a, 1: b, 2: c, length: 3}
- **Lexical Environment:** `[{a: 8, b: 9, c: 10, f: undefined, x: undefined}]`
- **this:** window

#### Function 'c' Execution Context (FEC) Execution

- `document.write(x)` - x is undefined in function c's scope (hoisted but not initialized), writes `undefined`
- `document.write(a)` - a is 8 (parameter value), writes `8`
- `var f = function...` - f is assigned function reference
- `f(a, b, c)` - function f is called with (8, 9, 10)

#### Function 'f' Execution Context (FEC) Creation

- **Outer:** Function c's scope
- **arguments:** {0: a, 1: b, 2: c, length: 3}
- **Lexical Environment:** `{a: 8, b: 9, c: 10, x: undefined}`
- **this:** window

#### Function 'f' Execution Context (FEC) Execution

- `b = a` - local b is assigned value of a (8)
- `document.write(b)` - b is 8, writes `8`
- `b = c` - local b is assigned value of c (10)
- `var x = 5` - local x is assigned 5
- Function f execution completes, returns to function c

#### Back to Function 'c' Execution Context (FEC)

- `document.write(b)` - b is still 9 (parameter value unchanged by function f), writes `9`
- `var x = 10` - x is assigned 10 in function c's scope
- Function c execution completes, returns to global execution

#### Back to Global Execution Context (GEC)

- `document.write(b)` - global b is 10, writes `10`
- `document.write(x)` - global x is undefined, writes `undefined`

### Final Output

```
undefined
8
8
9
10
undefined
```

##

# Code 2 Analysis

```javascript
var x = 9;
function myFunction() {
  return x * x;
}
document.write(myFunction());
x = 5;
document.write(myFunction());
```

## Execution Step-by-Step

### Creation Phase

#### Global Execution Context (GEC) Creation

- **Outer:** null
- **Lexical Environment:** `{x: undefined, myFunction: <function>}`
- **this:** window

### Execution Phase

#### Global Execution Context (GEC) Execution

- `var x = 9` - x is assigned the value 9
- **Updated Lexical Environment:** `{x: 9, myFunction: <function>}`
- `document.write(myFunction())` - myFunction is called

#### Function 'myFunction' Execution Context (FEC) Creation - First Call

- **Outer:** Global
- **Lexical Environment:** `{}` (no local variables)
- **arguments:** `{}` (no parameters)
- **this:** window

#### Function 'myFunction' Execution Context (FEC) Execution - First Call

- `return x * x` - x is not found in local scope, so it checks the outer (global) scope
- x is 9 in global scope, so calculation is 9 \* 9 = 81
- Function returns 81 to the caller
- **Function execution completes**

#### Back to Global Execution Context (GEC)

- `document.write(myFunction())` - writes 81 to the document
- `x = 5` - global x is reassigned to 5
- **Updated Lexical Environment:** `{x: 5, myFunction: <function>}`
- `document.write(myFunction())` - myFunction is called again

#### Function 'myFunction' Execution Context (FEC) Creation - Second Call

- **Outer:** Global
- **Lexical Environment:** `{}` (no local variables)
- **arguments:** `{}` (no parameters)
- **this:** window

#### Function 'myFunction' Execution Context (FEC) Execution - Second Call

- `return x * x` - x is not found in local scope, so it checks the outer (global) scope
- x is now 5 in global scope, so calculation is 5 \* 5 = 25
- Function returns 25 to the caller
- **Function execution completes**

#### Back to Global Execution Context (GEC)

- `document.write(myFunction())` - writes 25 to the document
- **Global execution completes**

### Final Output

```
81
25
```

##

# Code 3 Analysis

```javascript
var foo = 1;
function bar() {
  if (!foo) {
    var foo = 10;
  }
  alert(foo);
}
bar();
```

## Execution Step-by-Step

### Creation Phase

#### Global Execution Context (GEC) Creation

- **Outer:** null
- **Lexical Environment:** `{foo: undefined, bar: <function>}`
- **this:** window

### Execution Phase

#### Global Execution Context (GEC) Execution

- `var foo = 1` - foo is assigned the value 1
- **Updated Lexical Environment:** `{foo: 1, bar: <function>}`
- `bar()` - function bar is called

#### Function 'bar' Execution Context (FEC) Creation

- **Outer:** Global
- **Lexical Environment:** `{foo: undefined}` (local foo is hoisted)
- **arguments:** `{}` (no parameters)
- **this:** window

#### Function 'bar' Execution Context (FEC) Execution

- `if (!foo)` - evaluates to true because local `foo` is `undefined` and `!undefined` is `true`
- `var foo = 10` - local foo is assigned the value 10
- **Updated Lexical Environment:** `{foo: 10}`
- `alert(foo)` - alerts the value of local foo, which is 10
- **Function execution completes**

#### Back to Global Execution Context (GEC)

- **Global execution completes**

### Final Output

```
Alert shows: 10
```

#
