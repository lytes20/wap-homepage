"use strict";

function Animal(name, speed) {
  this.name = name;
  this.speed = speed;
}

Animal.prototype.run = function (speed) {
  this.speed = speed;
  console.log("Running at ", speed);
};

Animal.compareBySpeed = function (a1, a2) {
  return a1.speed - a2.speed2;
};

function Rabbit(name, speed) {
  Animal.call(this, name, speed);
}

Rabbit.prototype.hide = function () {
  console.log(this.name + "hides");
};
Object.setPrototypeOf(Animal.prototype, Rabbit.prototype);
Object.setPrototypeOf(Animal, Rabbit);
