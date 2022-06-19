describe('Header > Renderings', () => {
  before(() => {
    cy.visit('https://localhost:3000/')
  })

  it('should render the main site heading', () => {
    cy.get('[data-testid="main site heading"]').should('have.text', 'Next.js Playground')
  })

  it('should render the navigation bar and its links', () => {
    cy.get('[data-testid="navigation links"]').should('be.visible')

    cy.get('[data-testid="navigation links"] a').eq(0).should('have.text', 'Playground')
    cy.get('[data-testid="navigation links"] a').eq(1).should('have.text', 'News Agrregator (SSR)')
    cy.get('[data-testid="navigation links"] a').eq(2).should('have.text', 'Dev Tips')
    cy.get('[data-testid="navigation links"] a').eq(3).should('have.text', 'About')
  })
})