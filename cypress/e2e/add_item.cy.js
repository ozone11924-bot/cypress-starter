describe("Add Item", () => {
  it("should add a new item", () => {
    cy.intercept("POST", "/api/items").as("addItem");
    cy.intercept("POST", "**/api/items").as("addItemWildcard");

    // Force Cypress to load the page from the real server
    cy.visit("http://localhost:3000/index.html");

    cy.get("#name").type("Bananas");
    cy.get("#quantity").type("3");

    cy.contains("Add Item").click();

    cy.wait(["@addItem", "@addItemWildcard"]);

    cy.contains("Item added: Bananas", { timeout: 10000 }).should("be.visible");
  });
});