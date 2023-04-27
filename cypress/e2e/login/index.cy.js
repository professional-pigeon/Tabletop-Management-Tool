describe('log in', () => {
  it('should show you log in errors or error toast', () => {
    cy.visit('http://localhost:4000/login')
    cy.get('.chakra-button').contains('Login').click()
    cy.contains('issue with field')
    cy.get('input[id="input-User Name"]').type('Test_Admin')
    cy.get('input[id="input-Password"]').type('WaffleH0use')
    cy.get('.chakra-button').contains('Login').click()
    cy.contains('Error')
  })

  it('should log you in with correct data', () => {
    cy.visit('http://localhost:4000/login')
    cy.get('input[id="input-User Name"]').type('admin_kk')
    cy.get('input[id="input-Password"]').type('test123')
    cy.get('.chakra-button').contains('Login').click()
    cy.contains('Welcome admin_kk')
  })
})