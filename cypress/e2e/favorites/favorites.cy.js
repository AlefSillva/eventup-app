/// <reference types="cypress" />

describe("Favorite Events", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
    cy.get('input[placeholder="Email"]').type("alef@test.com");
    cy.get('input[placeholder="Password"]').type("1234");
    cy.contains("button", "Sign in").click();


    cy.window().then((win) => {
      win.localStorage.removeItem("eventup_favorites");
    });
  });

  it("should favorite an event and see it in Favorites", () => {
    cy.visit("http://localhost:5173/events");

    cy.get(".event_card_container")
      .should('have.length.at.least', 1)
      .first()
      .within(() => {
        cy.get(".favorite_button").click();
      });
  });


});
