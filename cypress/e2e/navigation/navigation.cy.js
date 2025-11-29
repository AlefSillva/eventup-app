/// <reference types="cypress" />

describe("Navigation between pages", () => {
  before(() => {
    cy.visit("http://localhost:5173/login");
    cy.get("#registerNow").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("Registration successful!");
    });

    cy.get("#inputFullName").type("alef");

    cy.get("#inputCreateEmail").type("alef@test.com");

    cy.get("#inputCreatePassword").type("123@456");

    cy.get("#buttonCreateRegister").click();

    cy.url().should("include", "/login");

    // Login before navigation tests
    cy.get("#inputAuthEmail").type("alef@test.com");
    cy.get("#inputAuthPassword").type("123@456");

    cy.get("#buttonAuthLogin").click();

    cy.get("#welcome").should("contain", "Welcome, alef");

  });

  it("navigate through Events, Profile, and Favorites in sequence", () => {
    cy.get("#menu")
      .contains("Events").click();
    
    cy.url().should("include", "/events");

    // Go from Events to Profile
    cy.get("#menu")
      .contains("Profile").click();
    cy.url().should("include", "/profile");

    // Go from Profile to Favorites
    cy.get("#menu")
      .contains("Favorites").click();
    cy.url().should("include", "/favorites");
  });
})
