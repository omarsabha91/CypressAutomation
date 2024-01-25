class SignInPage {

    phoneNumberInput = '#phone';
    passwordInput = '#password';
    logIn = '#submit-button';

    visit() {
        cy.visit('/login/');
    }

    typeUsername(username) {
        cy.get(this.phoneNumberInput).type(username);
    }

    typePassword(password) {
        cy.get(this.passwordInput).type(password);
    }


    submit() {
        cy.get(this.logIn).click();
    }
}

export default SignInPage;
