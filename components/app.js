class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.gradeTable = gradeTable
    this.pageHeader = pageHeader
    this.gradeForm = gradeForm
    this.createGrade = this.createGrade.bind(this)
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this)
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this)
    this.deleteGrade = this.deleteGrade.bind(this)
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this)
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this)
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var newGrades = 0;

    for (var i in grades){
      newGrades += grades[i].grade;
      var average = Math.round(newGrades / grades.length);
    }
    this.pageHeader.updateAverage(average, grades);
  }
  getGrades() {
    $.ajax({
      method: "GET",
      url: "http://sgt.lfzprototypes.com/api/grades",
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
      headers:
        {
        "X-Access-Token": "bAeejpzB"
        }
    })
  }
  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }
  createGrade(name, course, grade) {
    $.ajax({
      method: "POST",
      url: "http://sgt.lfzprototypes.com/api/grades",
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError,
      headers:
      {
        "X-Access-Token": "bAeejpzB"
      },
      data:
      {
        name,
        course,
        grade
      },
    })
  }
  handleCreateGradeError(error) {
    console.log("Error:", error);
  }
  handleCreateGradeSuccess() {
    this.getGrades();
  }
  deleteGrade(id) {
    $.ajax({
      method: "DELETE",
      url: "http://sgt.lfzprototypes.com/api/grades/" + id,
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError,
      headers:
        {
        "X-Access-Token": "bAeejpzB"
        }
    })
  }
  handleDeleteGradeError(error) {
    console.error(error);
  }
  handleDeleteGradeSuccess() {
    this.getGrades();
  }
}
