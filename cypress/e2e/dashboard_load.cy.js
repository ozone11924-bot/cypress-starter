describe("Dashboard Load", () => {
  it("should load items on dashboard", () => {
    cy.request("POST", "/api/items", { name: "Bread", quantity: 2 });

    cy.visit("/dashboard.html");

    cy.contains("Bread").should("be.visible");
  });
});