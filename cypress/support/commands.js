// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (user_name = 'test_user', password = 'run123!') => { 
  cy.request({
    method: 'POST',
    url: 'http://localhost:4000/api/auth/login',
    body: { user_name, password }
  }).then(({ body }) => {
    window.localStorage.setItem('_api_tabletop_management_session', body.token)
  }) 
})
// const login = (user_name = 'test_user', password = 'run123!') => {
//   cy.request({
//     method: 'POST',
//     url: 'http://localhost:4000/api/auth/login',
//     body: { user_name, password }
//   }).then(({ body }) => {
//     window.localStorage.setItem('_api_tabletop_management_session', body.token)
//   }) 
// }
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })