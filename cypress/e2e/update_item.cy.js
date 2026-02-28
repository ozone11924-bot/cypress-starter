describe("Update Item", () => {
  it("should update an existing item", () => {
    cy.request("POST", "/api/items", { name: "Milk", quantity: 1 }).then(res => {
      const id = res.body.id;

      cy.request("PUT", `/api/items/${id}`, { name: "Milk", quantity: 5 });

      cy.request("/api/items").its("body").should(items => {
        const updated = items.find(i => i.id === id);
        expect(updated.quantity).to.equal(5);
      });
    });
  });
});