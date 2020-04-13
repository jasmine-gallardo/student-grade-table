class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement
    this.updateAverage = this.updateAverage.bind(this)
  }
  updateAverage(newAverage, grades) {
    var badgeElement = this.headerElement.querySelector(".badge");
    if (grades.length === 0){
      badgeElement.classList.remove("badge-info")
      badgeElement.classList.add("badge-secondary");
      badgeElement.textContent = "N/A";
    } else {
      badgeElement.classList.add("badge-info")
      badgeElement.textContent = newAverage;
    }
  }
}
