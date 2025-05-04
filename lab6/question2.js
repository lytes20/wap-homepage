"use strict";
function Student(firstName, lastName, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = grades;
}

Student.prototype.inputNewGrade = function (newGrade) {
  this.grades.push(newGrade);
};

Student.prototype.computeAverageGrade = function () {
  const sumOfAllGrades = this.grades.reduce((acc, grade) => acc + grade, 0);
  return sumOfAllGrades / this.grades.length;
};

let student1 = new Student("Google", "Chrome", [85, 90, 78]);
let student2 = new Student("Mozilla", "Firefox", [88, 92, 79]);
let student3 = new Student("Brave", "New World", [70, 80, 75]);

const students = [student1, student2, student3];
const sum = students.reduce((acc, st) => acc + st.computeAverageGrade(), 0);
const averageGradeForAllStudents = sum / students.length;
console.log("averageGradeForAllStudents", averageGradeForAllStudents);
