describe('Page d\'accueil', () => {
  it('affiche le titre de bienvenue', () => {
    cy.visit('/')
    cy.get('[data-testid="home-title"]')
      .should('be.visible')
      .and('contain.text', 'Bienvenue sur le boilerplate React')
  })
})
