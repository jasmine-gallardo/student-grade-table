class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement
  }
  updateGrades(grades) {
    var tbodyElement = this.tableElement.querySelector("tbody");
    tbodyElement.textContent = "";
    for (var i = 0; i < grades.length; i++){
      var trElement = document.createElement("tr");
      var name = document.createElement("td");
      name.textContent = grades[i].name;

      var course = document.createElement("td");
      course.textContent = grades[i].course;

      var grade = document.createElement("td");
      grade.textContent = grades[i].grade;

      trElement.appendChild(name);
      trElement.appendChild(course);
      trElement.appendChild(grade);
      tbodyElement.appendChild(trElement);
    }
    console.log("Grades:", grades);
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
}
