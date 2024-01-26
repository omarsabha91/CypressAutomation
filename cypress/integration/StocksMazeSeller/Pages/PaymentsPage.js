import MainNavBar from '../components/MainNavBar';
class PaymentsPage {

    constructor() {
        this.navBar = new MainNavBar();
    }

    visit() {
        cy.visit('/dashboard/');
    }

}
export default PaymentsPage;
