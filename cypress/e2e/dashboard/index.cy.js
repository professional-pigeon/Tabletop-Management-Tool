describe('dashboard', () => {
  before(() => {
    cy.visit('http://localhost:4000/login')
    cy.get('input[id="input-User Name"]').type('test_user')
    cy.get('input[id="input-Password"]').type('run123!')
    cy.get('.chakra-button').contains('Login').click()
    cy.contains('Welcome test_user')
  })

  it('goes to dashboard and creates a campaign', () => {
    cy.visit('http://localhost:4000/dashboard')
    cy.get('.chakra-button').contains('Add Campaign').click()
    cy.get('input[id="input-Name"]').type('Test Campaign')
    cy.get('button[id="Add-Campaign"]').click()
    cy.contains('Test Campaign')
    cy.get('button[id="open-campaign-delete-modal"]').last().click()
    cy.get('input[id="input-"]').type('DELETE')
    cy.get('button[id="Delete-Campaign"]').click()
  })

  it('goes to dashboard and deletes most recent campaign', () => {
    cy.visit('http://localhost:4000/dashboard')
    cy.contains('Test Campaign')
    cy.get('button[id="open-campaign-delete-modal"]').last().click()
    cy.get('input[id="input-"]').type('DELETE')
    cy.get('button[id="Delete-Campaign"]').click()
    cy.get('Test Campaign').should('not.exist')
  })

  // it('should bring you to the log in page if you are not logged in', () => {
  //   cy.visit('http://localhost:4000/dashboard')
  //   cy.get('.chakra-button').contains('Add Campaign').click()
  //   cy.get('input[id="input-Name"]').type('Test Campaign')
  //   cy.get('button[id="Add-Campaign"]').click()
  //   cy.get('button[id="open-campaign-delete-modal"]').click()
  //   cy.get('input[id="input-"]').type('DELETE')
  //   cy.get('button[id="Delete-Campaign"]').click()
  // })
})