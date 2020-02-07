class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
    this.updateAverage = this.updateAverage.bind(this);
  }
  updateAverage(newAverage) {
    var badgeElement = this.headerElement.querySelector(".badge");
    badgeElement.textContent = newAverage;
  }
}
