/// <reference types="cypress" />

describe("Login Flow", () => {
    
  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
  });

  it("should login with valid credentials", () => {
    cy.get('input[placeholder="Email"]').type("teste@test.com");
    cy.get('input[placeholder="Senha"]').type("1234");
    cy.contains("button", "Entrar").click();

    cy.url().should("include", "/");
    cy.get("header").should("be.visible");
  });

  it("should show error on invalid credentials", () => {
    cy.get('input[placeholder="Email"]').type("errado@email.com");
    cy.get('input[placeholder="Senha"]').type("senha");

    const stub = cy.stub();
    cy.on("window:alert", stub);

    cy.contains("button", "Entrar").click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith("Email ou senha incorretos");
    });

    cy.url().should("include", "/login");
  });

});
