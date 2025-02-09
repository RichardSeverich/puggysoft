/// <reference types="cypress" />

import DuckduckgoPage from '../../pages/PrediktiveDuckduckgoPage';

describe('Verify that the user is able to search', () => {

  const duckduckgoPage = new DuckduckgoPage();

  beforeEach(() => {
    duckduckgoPage.visit();
  })

  it('Verify that the user is able search "Android" criteria', () => {
    duckduckgoPage.search("Android");
    duckduckgoPage.verifySearchResult("Android", "1");
    duckduckgoPage.verifySearchResult("Android", "2");
    duckduckgoPage.verifySearchResult("Android", "2");
  });

  it('Verify that the total options on Region Criteria filter is greater than 10', () => {
    duckduckgoPage.search("ios");
    duckduckgoPage.verifyRegionFilterSection();
  });

});
