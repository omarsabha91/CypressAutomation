
import MainNavBar from '../components/MainNavBar';
class OrdersPage {

    constructor() {
        this.navBar = new MainNavBar();
    }

    visit() {
        cy.visit('/orders/');
    }

}
export default OrdersPage;