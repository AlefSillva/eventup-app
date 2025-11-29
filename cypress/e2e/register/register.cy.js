/// <reference types="cypress" />

describe("Should register a new user", () => {
    
  beforeEach(() => {
    cy.visit("http://localhost:5173");

    cy.get("#registerNow")
      .click();
  });

    it("should register a new user successfully", () => { 
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Registration successful!');
        });

        cy.get('#inputFullName')
            .type("alef");

        cy.get('#inputCreateEmail')
            .type("alef@test.com");
        
        cy.get('#inputCreatePassword')
            .type("123@456");
        
        cy.get("#buttonCreateRegister")
            .click();
        
        cy.url().should("include", "/login");
        
    })

});
