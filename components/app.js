class App {
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    console.log(grades);
  }
  constructor() {
    this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess.bind(this);
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
