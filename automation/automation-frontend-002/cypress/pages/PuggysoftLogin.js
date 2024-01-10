class LoginPage {

  elements = {
    inputUsername: () => cy.get("input[placeholder='Username']"),
    inputPassword: () => cy.get("input[placeholder='Password']"),
    buttonEnter: () => cy.xpath("//button[text()='Entrar']"),
    enterSystemText: () => cy.xpath("//div[text()='Ingresar al sistema']"),
    selectTenantText: () => cy.xpath("//label[text()='Seleccione un tenant']"),
    selectRoleText: () => cy.xpath("//label[text()='Selecione un rol']"),
    selectTenant: () => cy.xpath("//select[@id='select-tenant']"),
    selectRole: () => cy.xpath("//select[@id='select-role']"),
    buttonContinue: () => cy.xpath("//button[text()='Continuar']"),
  }

  visit() {
    cy.visit('/login');
  }

  loginWith(username, password) {
    this.elements.inputUsername().should('be.visible');
    this.elements.inputUsername().type(username);
    this.elements.inputPassword().should('be.visible');
    this.elements.inputPassword().type(password);
    // Boton Entrar
    this.elements.buttonEnter().should('be.visible');
    this.elements.buttonEnter().click();
  }

  loginContinueWith(tenant, role) {
    // Tenant Role Modal text
    this.elements.enterSystemText().should('be.visible');
    this.elements.selectTenantText().should('be.visible');
    this.elements.selectRoleText().should('be.visible');
    // Select Tenant
    this.elements.selectTenant().should('be.visible');
    this.elements.selectTenant().select(tenant);
    // Select Rol
    this.elements.selectRole().should('be.visible');
    this.elements.selectRole().select(role);
    // Boton Continuar
    this.elements.buttonContinue().should('be.visible');
    this.elements.buttonContinue().click();
  }

}

export default LoginPage;