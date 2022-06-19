describe('Footer > Renderings', () => {
  before(() => {
    cy.visit('https://localhost:3000/')
  })

  it('should render the copyright texts', () => {
    cy.get('[data-testid="copyright texts"]').should('have.text', 'Copyright 2022 ©')
  })

  it('should render the footer links navigation bar and its link(s)', () => {
    cy.get('[data-testid="footer - links"]').should('be.visible')

    cy.get('[data-testid="footer - link - octocat"]').should('be.visible')
  })
})