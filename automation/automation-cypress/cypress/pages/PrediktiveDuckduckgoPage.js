
class DuckduckgoPage {

  elements = {
    inputSeach: () => cy.get("input[id='searchbox_input']"),
    buttonClear: () => cy.get("button[aria-label='Clear search input']"),
    buttonSearch: () => cy.get("button[aria-label='Search']"),
    // Android search resuls
    result(criteria, resultNumber) {
      return cy.xpath(`//section[@data-testid='mainline']/ol[@class='react-results--main']/li[${resultNumber}][.//text()[contains(., '${criteria}')]]`);
    },
    regionFilter: () => cy.get("a[data-testid='region-filter-label']"),
    regionFilterSection: () => cy.get("div[data-testid='dropdown-options']"),
    regionFilterOptions: () => cy.xpath("//div[@data-testid='dropdown-options']/div[2]/*"),
  }

  visit() {
    cy.visit('https://start.duckduckgo.com/');
  }

  search(searchCriteria) {
    this.elements.inputSeach().should('be.visible');
    this.elements.inputSeach().type(searchCriteria);
    this.elements.buttonClear().should('be.visible');
    this.elements.buttonSearch().should('be.visible');
    this.elements.buttonSearch().click();
    // cy.wait(1000);
  }

  verifySearchResult(criteria, resultNumber) {
    this.elements.result(criteria, resultNumber).should('be.visible');
  }

  verifyRegionFilterSection() {
    this.elements.regionFilter().click();
    this.elements.regionFilterSection().should('be.visible');
    this.elements.regionFilterOptions().should('have.length.greaterThan', 10);
  }

}

export default DuckduckgoPage;
