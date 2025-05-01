Creation Phase:

1. Global EC creation:
   Outer: null,
   LE: [{x: undefined, myFunction: fn}]
   TDZ{}
   this: window
2. Global EC execution:
   x = 9, 9 is assigned to x
   myFunction() is called
   Outer: null,
   LE: [{x: 9, myFunction: fn}]
   TDZ:{}
   this: window
3. myFunction() EC creation:
   Outer: global
   arguments: {}
   LE: [{}]
   TDZ: {}
   this: window

4. myFunction() EC execution:
   x * x -> 9*9 -> 45
   Outer: global
   arguments: {}
   LE: [{}]
   TDZ: {}
   this: window

document.write(myFunction());
45 gets written
back to global execution
x = 5, 5 is assigned to x
Global LE: [{x: 5, myFunction: fn}]

5. myFunction() EC creation:
   Outer: global
   arguments: {}
   LE: [{}]
   TDZ: {}
   this: window

6. myFunction() EC execution:
   x * x -> 5*5 -> 25
   Outer: global
   arguments: {}
   LE: [{}]
   TDZ: {}
   this: window

document.write(myFunction());
25 gets written

What is written:
45
25
