"use strict";
let student = {
  firstName: "Gideon",
  lastName: "Bamuleseyo",
  grades: [100, 200],
  inputNewGrade: function (newGrade) {
    this.grades.push(newGrade);
  },

  computeAverageGrade: function () {
    const sumOfAllGrades = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sumOfAllGrades / this.grades.length;
  },
};

//student1
const student1 = Object.create(student);
student1.firstName = "Google";
student1.lastName = "Chrome";
student1.grades = [85, 90, 78];

//student2
const student2 = Object.create(student);
student2.firstName = "Mozilla";
student2.lastName = "Firefox";
student2.grades = [88, 92, 79];

//student3
const student3 = Object.create(student);
student3.firstName = "Brave";
student3.lastName = "New World";
student3.grades = [70, 80, 75];

const students = [student1, student2, student3];
const sum = students.reduce((acc, st) => acc + st.computeAverageGrade(), 0);
const averageGradeForAllStudents = sum / students.length;
console.log("averageGradeForAllStudents", averageGradeForAllStudents);
