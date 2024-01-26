
import MainNavBar from '../components/MainNavBar';
class ProductsPage {

    constructor() {
        this.navBar = new MainNavBar();
    }

    visit() {
        cy.visit('/products/');
    }

}
export default ProductsPage;