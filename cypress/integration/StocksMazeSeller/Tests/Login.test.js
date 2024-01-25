
import SignInPage from '../pages/SignInPage';

describe('StocksMazeSeller Sign In Test', () => {
    const signInPage = new SignInPage();

    it('should allow a seller to sign in', () => {
        signInPage.visit();
        signInPage.typeUsername(Cypress.env('username'));
        signInPage.typePassword(Cypress.env('password'));
        signInPage.submit();
        cy.url().should('include', '/dashboard');
    });
});
