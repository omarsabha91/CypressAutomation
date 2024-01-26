import MainNavBar from '../components/MainNavBar';
class NotificationsPage {

    constructor() {
        this.navBar = new MainNavBar();
    }

    visit() {
        cy.visit('/notifications/');
    }

}
export default NotificationsPage;
