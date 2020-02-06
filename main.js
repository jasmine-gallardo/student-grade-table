var tableElement = document.querySelector("table");
var studentGradeTable = new GradeTable(tableElement);

var studentGrades = new App(studentGradeTable);
studentGrades.start();
