/// <reference types="cypress" />

import LoginPage from '../../../pages/PuggysoftLogin';

describe('Login tests with page object', () => {

  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  })

  it('Verify that the user is able to login', () => {
    loginPage.visit();
    loginPage.loginWith('admin', 'admin123');
    loginPage.loginContinueWith('EMPRESA 1', 'ADMIN_USERS');
  });

});
