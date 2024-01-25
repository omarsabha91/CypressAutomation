
import SignInPage from '../pages/SignInPage';

describe('StocksMazeSeller Sign In Test', () => {
    const signInPage = new SignInPage();

    it('should allow a seller to sign in', () => {
        signInPage.visit();
        signInPage.typeUsername('+12676704349');
        signInPage.typePassword('test1234');
        signInPage.submit();
        cy.url().should('include', '/dashboard');
    });
});
