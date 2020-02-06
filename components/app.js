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
