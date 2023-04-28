describe('dashboard', () => {
  it('goes to dashboard, creates and navigates to a campaign', () => {
    cy.login()
    cy.visit('http://localhost:4000/dashboard')
    cy.get('.chakra-button').contains('Add Campaign').click()
    cy.get('input[id="input-Name"]').type('Test Campaign')
    cy.get('button[id="Add-Campaign"]').click()
    cy.contains('Test Campaign')
  })

  it('allows you to delete a campaign', () => {
    cy.login()
    cy.visit('http://localhost:4000/dashboard')
    cy.get('button[id="open-campaign-delete-modal"]').last().click()
    cy.get('input[id="input-"]').type('DELETE')
    cy.get('button[id="Delete-Campaign"]').click()
  })
})