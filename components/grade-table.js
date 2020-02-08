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
  renderGradeRow(data, deleteGrade) {
    console.log(data);
    var tbodyElement2 = this.tableElement.querySelector("tbody");

    var trElementRender = document.createElement("tr");

    var tdNameRender = createElement("td");
    tdNameRender.textContent = data.name;

    var tdCourseRender = createElement("td");
    tdCourseRender.textContent = data.course;

    var tdGradeRender = createElement("td");
    tdGradeRender.textContent = data.grade;

    var tdRenderForButton = createElement("td");
    var deleteButtonRender = createElement("button");
    deleteButtonRender.textContent = "DELETE";

    tdRenderForButton.appendChild(deleteButtonRender);

    trElementRender.appendChild(tdNameRender);
    trElementRender.appendChild(tdCourseRender);
    trElementRender.appendChild(tdGradeRender);
    trElementRender.appendChild(tdRenderForButton);

    tbodyElement2.appendChild(trElementRender);
  }
}
