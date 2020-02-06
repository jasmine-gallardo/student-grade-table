var tableElement = document.querySelector("table");
var studentGradeTable = new GradeTable(tableElement);

var headerElement = document.querySelector("header");
var pageHeader = new PageHeader(headerElement);

var studentGrades = new App(studentGradeTable, pageHeader);
studentGrades.start();
