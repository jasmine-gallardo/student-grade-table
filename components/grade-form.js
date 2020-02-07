class GradeForm {
  constructor(formElement) {
    this.formElement = formElement
    this.handleSubmit = this.handleSubmit.bind(this)
    this.gradeFormListener = this.formElement.addEventListener("submit", this.handleSubmit)
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    event.preventDefault()
    var formData = new FormData(event.target);

    formData.get(name, course, grade) {
      var nameData = name;
      var courseData = course;
      var gradeData = grade;
    }
    console.log("hi");
  }
}
