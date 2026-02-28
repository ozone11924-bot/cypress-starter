describe("API Health", () => {
  it("should return items array", () => {
    cy.request("/api/items").its("status").should("eq", 200);
  });
});