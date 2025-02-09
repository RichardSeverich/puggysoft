/// <reference types="cypress" />

describe('Login tests', () => {

  beforeEach(() => {
    cy.visit('/login')
  })

  it('Verify user is able to see login page', () => {
    cy.get("div[class='puggysoft-login-form']").should('be.visible');
    cy.xpath("//label[text()='Password']").should('be.visible');
    cy.xpath("//label[text()='Username']").should('be.visible');
    cy.get("input[placeholder='Username']").should('be.visible');
    cy.get("input[placeholder='Password']").should('be.visible');
    cy.xpath("//button[text()='Entrar']").should('be.visible');
  })

  it('Verify user is able to login', () => {
    cy.get("input[placeholder='Username']").should('be.visible');
    cy.get("input[placeholder='Username']").type('admin');
    cy.get("input[placeholder='Password']").should('be.visible');
    cy.get("input[placeholder='Password']").type('admin123');
    // Boton Entrar
    cy.xpath("//button[text()='Entrar']").should('be.visible');
    cy.xpath("//button[text()='Entrar']").click();
    // Tenant Role Modal text
    cy.xpath("//div[text()='Ingresar al sistema']").should('be.visible');
    cy.xpath("//label[text()='Seleccione un tenant']").should('be.visible');
    cy.xpath("//label[text()='Selecione un rol']").should('be.visible');
    // Select Tenant
    cy.xpath("//select[@id='select-tenant']").should('be.visible');
    cy.xpath("//select[@id='select-tenant']").select('EMPRESA 1');
    // Select Rol
    cy.xpath("//select[@id='select-role']").should('be.visible');
    cy.xpath("//select[@id='select-role']").select('ADMIN');
    // Boton Continuar
    cy.xpath("//button[text()='Continuar']").should('be.visible');
    cy.xpath("//button[text()='Continuar']").click();
  })

});
