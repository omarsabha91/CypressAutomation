import MainNavBar from '../components/MainNavBar';
class SettingsPage {

    constructor() {
        this.navBar = new MainNavBar();
    }

    visit() {
        cy.visit('/dashboard/');
    }

}
export default SettingsPage;
