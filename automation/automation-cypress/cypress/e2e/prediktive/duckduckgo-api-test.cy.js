context("GET /users", () => {

  it("gets a list of users", () => {
    cy.request("GET", "https://api.duckduckgo.com/?q=android&format=json").then((response) => {
      console.log({ response });
      const body = JSON.parse(response.body)
      console.log({ body });
      expect(response.status).to.eq(200)
      expect(body).to.have.property("RelatedTopics");
      expect(body).to.have.property('AbstractSource', "Wikipedia");
      expect(body).to.have.property('AbstractURL', "https://en.wikipedia.org/wiki/Android");
      const relatedTopics = body.RelatedTopics
      console.log(relatedTopics);
      relatedTopics.forEach(element => {
        if (element.Icon && element.Icon.URL !== null) {
          console.log(element.Icon.URL);
        }
      });
    })
  })
})
