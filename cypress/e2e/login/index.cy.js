describe('template spec', () => {
  it('should show you log in errors', () => {
    cy.visit('http://localhost:4000/login')
    cy.get('.chakra-button').contains('Login').click()
    cy.contains('issue with field')
  })

  it('should log you in with correct data', () => {
    cy.visit('http://localhost:4000/login')
    cy.get('input').type('Test_Admin')
    cy.get('input').type('WaffleH0use')
    cy.get('.chakra-button').contains('Login').click()
  })
})