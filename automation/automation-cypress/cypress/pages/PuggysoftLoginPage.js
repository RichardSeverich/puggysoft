class LoginPage {
  visit() {
    cy.visit('/login');
  }

  loginWith(username, password) {
    cy.get("input[placeholder='Username']").should('be.visible');
    cy.get("input[placeholder='Username']").type(username);
    cy.get("input[placeholder='Password']").should('be.visible');
    cy.get("input[placeholder='Password']").type(password);
    // Boton Entrar
    cy.xpath("//button[text()='Entrar']").should('be.visible');
    cy.xpath("//button[text()='Entrar']").click();
  }

  loginContinueWith(tenant, role) {
    // Tenant Role Modal text
    cy.xpath("//div[text()='Ingresar al sistema']").should('be.visible');
    cy.xpath("//label[text()='Seleccione un tenant']").should('be.visible');
    cy.xpath("//label[text()='Selecione un rol']").should('be.visible');
    // Select Tenant
    cy.xpath("//select[@id='select-tenant']").should('be.visible');
    cy.xpath("//select[@id='select-tenant']").select(tenant);
    // Select Rol
    cy.xpath("//select[@id='select-role']").should('be.visible');
    cy.xpath("//select[@id='select-role']").select(role);
    // Boton Continuar
    cy.xpath("//button[text()='Continuar']").should('be.visible');
    cy.xpath("//button[text()='Continuar']").click();
  }

}

export default LoginPage;