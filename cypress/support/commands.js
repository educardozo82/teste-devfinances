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
// Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.Commands.add('addAssets', (asset) => {
    cy.get('[class="button new"]').click();
    cy.get('[placeholder="Descrição"]').type(asset.title);
    cy.get('[type="number"]').type(asset.value);
    cy.get('[type="date"]').type(asset.date);
    cy.get('button').click();
    // ascertação
    cy.get('#totalDisplay').should('be.visible');
  });