var noGradesElement = document.querySelector("p");

var tableElement = document.querySelector("table");
var studentGradeTable = new GradeTable(tableElement, noGradesElement);

var headerElement = document.querySelector("header");
var pageHeader = new PageHeader(headerElement);

var formElement = document.querySelector("form");
var gradeForm = new GradeForm(formElement);

var studentGrades = new App(studentGradeTable, pageHeader, gradeForm);
studentGrades.start();
