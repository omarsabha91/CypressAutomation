import MainNavBar from '../components/MainNavBar';
class SettingsPage {

    constructor() {
        this.navBar = new MainNavBar();
    }

    visit() {
        cy.visit('/settings/');
    }

}
export default SettingsPage;
