describe("Welcome", () => {
  it('displays welcome page', () => {
    cy.visit('/')
    cy.get('[data-testid="home-title"]')
      .should('be.visible')
      .and('contain.text', 'Welcome in React boilerplate')
  })
})
