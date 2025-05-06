"use strict";

function Student(studentId, answers) {
  this.studentId = studentId;
  this.answers = answers || [];
}

Student.prototype.addAnswer = function (question) {
  this.answers.push(question);
};

function Question(qid, answer) {
  this.qid = qid;
  this.answer = answer;
}

Question.prototype.checkAnswer = function (answer) {
  return this.answer === answer;
};

function Quiz(questions, students) {
  // Map that holds questions example {q1: "q1 correct answer", q2: "q2 correct answer"}
  const questionsMap = {};
  questions.forEach((q) => {
    questionsMap[q.qid] = q.answer;
  });
  this.questions = questionsMap;
  this.students = students;
}

Quiz.prototype.scoreStudentBySid = function (sid) {
  let scores = {};
  this.students.forEach((student) => {
    let studentScore = 0;
    student.answers.forEach((answer) => {
      const correctAnswer = this.questions[answer.qid];
      if (answer.checkAnswer(correctAnswer)) {
        studentScore++;
      }
    });
    scores[student.studentId] = studentScore;
  });
  return scores[sid];
};

Quiz.prototype.getAverageScore = function () {
  let studentScore = 0;
  this.students.forEach((student) => {
    student.answers.forEach((answer) => {
      const correctAnswer = this.questions[answer.qid];
      if (answer.checkAnswer(correctAnswer)) {
        studentScore++;
      }
    });
  });
  return studentScore / this.students.length;
};

const student1 = new Student(10);
student1.addAnswer(new Question(2, "a"));
student1.addAnswer(new Question(3, "b"));
student1.addAnswer(new Question(1, "b"));
const student2 = new Student(11);
student2.addAnswer(new Question(3, "b"));
student2.addAnswer(new Question(2, "a"));
student2.addAnswer(new Question(1, "d"));
const students = [student1, student2];
const questions = [
  new Question(1, "b"),
  new Question(2, "a"),
  new Question(3, "b"),
];
const quiz = new Quiz(questions, students);

let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5
