/// <reference types="cypress" />

describe("Favorite Events", () => {

  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
    cy.get('input[placeholder="Email"]').type("teste@test.com");
    cy.get('input[placeholder="Senha"]').type("1234");
    cy.contains("button", "Entrar").click();
  });

  it("should favorite an event and see it in Favorites", () => {
    cy.contains("Events").click();

    // click the first favorite button
    cy.get("button").contains("🤍").first().click();

    cy.contains("Favorites").click();

    cy.get(".event_card_container").should("have.length", 1);
  });

});
