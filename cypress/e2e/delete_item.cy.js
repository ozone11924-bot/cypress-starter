describe("Delete Item", () => {
  it("should delete an item", () => {
    cy.request("POST", "/api/items", { name: "Eggs", quantity: 12 }).then(res => {
      const id = res.body.id;

      cy.request("DELETE", `/api/items/${id}`);

      cy.request("/api/items").its("body").should(items => {
        expect(items.find(i => i.id === id)).to.be.undefined;
      });
    });
  });
});