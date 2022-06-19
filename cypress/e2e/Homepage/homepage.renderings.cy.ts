describe('Homepage > Renderings', () => {
  before(() => {
    cy.visit('https://localhost:3000/')
  })

  it('should render the main body text', () => {
    cy.get('[data-testid="main text"]').should('have.text', 'An experimental playground of various features and capabilities, leveraging Next.JS and React 🧑🏻‍🔬')
  })

  it('should render the main button', () => {
    cy.get('[data-testid="button - playground"]').should('have.text', 'View Playground')
  })
})