describe('dashboard', () => {
  it('navigates to campaign from dashboard', () => {
    cy.login()
    cy.visit('http://localhost:4000/dashboard')
    cy.get('a[href*="/campaign"]').first().click()
    cy.contains('Campaign: Static Test')
  })
})