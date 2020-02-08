class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement
    this.noGradesElement = noGradesElement
  }
  updateGrades(grades) {
    var tbodyElement = this.tableElement.querySelector("tbody");
    tbodyElement.textContent = "";
    for (var i = 0; i < grades.length; i++){
      this.renderGradeRow(grades[i], this.deleteGrade);
    }
    if (!grades) {
      this.noGradesElement.classList.remove("d-none");
    }
    console.log("Grades:", grades);
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    var tbodyElement2 = this.tableElement.querySelector("tbody");

    var trElementRender = document.createElement("tr");

    var tdNameRender = document.createElement("td");
    tdNameRender.textContent = data.name;

    var tdCourseRender = document.createElement("td");
    tdCourseRender.textContent = data.course;

    var tdGradeRender = document.createElement("td");
    tdGradeRender.textContent = data.grade;

    var tdRenderForButton = document.createElement("td");
    var deleteButtonRender = document.createElement("button");
    deleteButtonRender.textContent = "DELETE";
    deleteButtonRender.className = "btn btn-danger";
    deleteButtonRender.setAttribute("type", "button");
    deleteButtonRender.addEventListener("click", function(){
      deleteGrade(data.id);
    });

    tdRenderForButton.appendChild(deleteButtonRender);

    trElementRender.appendChild(tdNameRender);
    trElementRender.appendChild(tdCourseRender);
    trElementRender.appendChild(tdGradeRender);
    trElementRender.appendChild(tdRenderForButton);

    tbodyElement2.appendChild(trElementRender);

    return trElementRender;
  }
}
