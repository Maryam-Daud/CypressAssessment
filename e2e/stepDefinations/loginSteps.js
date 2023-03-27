import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am on Sauce Demo Login Page', () => {
  cy.visit('https://www.saucedemo.com/');
});

When('I fill the account information for account standard_user', () => {
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
});

When('I fill the account information for account locked_out_user', () => {
  cy.get('#user-name').type('locked_out_user');
  cy.get('#password').type('secret_sauce');
});

When('I click Login Button', () => {
  cy.get('#login-button').click();
});

Then('I am redirected to the Sauce Demo Main Page', () => {
  cy.url().should('include', '/inventory.html');
});

Then('I verify the app logo is visible', () => {
  cy.get('.app_logo').should('be.visible');
})

Then('I verify the error message to contain the text {string}', (errorMessage) => {
  cy.get('.error-message-container').should('contain.text', errorMessage);
});
