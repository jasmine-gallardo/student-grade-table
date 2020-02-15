class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement
    this.updateAverage = this.updateAverage.bind(this)
  }
  updateAverage(newAverage, grades) {
    var badgeElement = this.headerElement.querySelector(".badge");
    badgeElement.textContent = newAverage;
    if (grades.length === 0){
      badgeElement.classList.add("badge-secondary");
      badgeElement.textContent = "N/A";
    }
  }
}
