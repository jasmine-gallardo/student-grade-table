class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.gradeTable = gradeTable
    this.pageHeader = pageHeader
    this.gradeForm = gradeForm
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var newGrades = 0;

    for (var i in grades){
      newGrades += grades[i].grade;
      var average = newGrades / grades.length;
    }
    this.pageHeader.updateAverage(average);
    console.log("Average:", average);
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
  }

  createGrade(name, course, grade) {
    console.log("Name:", name);
    console.log("Course:", course);
    console.log("Grade:", grade);
  }
  handleCreateGradeError(error) {
    console.log(error);
  }
  handleCreateGradeSuccess() {
    this.getGrades();
  }
}
