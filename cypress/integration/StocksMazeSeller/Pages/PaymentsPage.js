import MainNavBar from '../components/MainNavBar';
class PaymentsPage {

    constructor() {
        this.navBar = new MainNavBar();
    }

    visit() {
        cy.visit('/payments/');
    }

}
export default PaymentsPage;
