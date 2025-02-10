context("GET /users", () => {
  it("gets a list of users", () => {
    cy.request("GET", "/users").then((response) => {
      expect(response.status).to.eq(200)
      console.log({response});
      expect(response.body.results).length.to.be.greaterThan(1)
      expect(response.body).has.property("title", "Automation");
      expect(response.body).has.property("title", "Automation");
      expect(response.body).to.have.property('code', 200);
    })
  })
})