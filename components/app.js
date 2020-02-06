class App {
  constructor(gradeTable) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this),
      this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this),
      this.gradeTable = gradeTable
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

    console.log("Average:", average);
    console.log("New Grades:", newGrades);
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
}
