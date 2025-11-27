/// <reference types="cypress" />

describe("Login Flow", () => {
    
  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
  });

  it("should login with valid credentials", () => {
    cy.get('input[placeholder="Email"]').type("alef@test.com");
    cy.get('input[placeholder="Password"]').type("1234");
    cy.contains("button", "Sign in").click();

    cy.url().should("include", "/login");
    
  });

  it("should show error on invalid credentials", () => {
    cy.get('input[placeholder="Email"]').type("wrong@email.com");
    cy.get('input[placeholder="Password"]').type("password");

    const stub = cy.stub();
    cy.on("window:alert", stub);

    cy.url().should("include", "/login");
  });

});
