import MainNavBar from '../components/MainNavBar';
class NotificationsPage {

    constructor() {
        this.navBar = new MainNavBar();
    }

    visit() {
        cy.visit('/dashboard/');
    }

}
export default NotificationsPage;
