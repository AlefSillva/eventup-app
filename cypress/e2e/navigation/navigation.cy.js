describe("Navigation Menu", () => {

  beforeEach(() => {
    // login before each test
    cy.visit("http://localhost:5173/login");
    cy.get('input[placeholder="Email"]').type("teste@test.com");
    cy.get('input[placeholder="Senha"]').type("1234");
    cy.contains("button", "Entrar").click();
  });

  it("should navigate to Home", () => {
    cy.contains("Home").click();
    cy.url().should("include", "/");
    cy.contains("Discover Your Next Event").should("exist");
  });

  it("should navigate to Events", () => {
    cy.contains("Events").click();
    cy.url().should("include", "/events");
    cy.contains("All events").should("exist");
  });

  it("should navigate to Favorites", () => {
    cy.contains("Favorites").click();
    cy.url().should("include", "/favorites");
    cy.contains("My favorite events").should("exist");
  });

});
