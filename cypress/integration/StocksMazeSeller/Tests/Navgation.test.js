
import SignInPage from '../Pages/SignInPage';
import DashBoardPage from '../Pages/DashBoardPage';
import ProductsPage from '../Pages/ProductsPage';
import OrdersPage from '../Pages/OrdersPage';
import NotificationsPage from "../Pages/NotifcationsPage";
import PaymentsPage from "../Pages/PaymentsPage";
import SettingsPage from "../Pages/SettingsPage";
describe('StocksMazeSeller Navigations Test', () => {
    const signInPage = new SignInPage();
    const dashBoardPage = new DashBoardPage();
    const ordersPage = new OrdersPage();
    const settingsPage = new SettingsPage();
    const paymentsPage = new PaymentsPage();
    const notificationsPage = new NotificationsPage();
    it('should allow a seller to sign in', () => {
        signInPage.visit();
        signInPage.typeUsername(Cypress.env('username'));
        signInPage.typePassword(Cypress.env('password'));
        signInPage.submit();
        cy.url().should('include', '/dashboard');
        cy.title().should('include', 'Dashboard');
        dashBoardPage.navBar.clickNavItem(dashBoardPage.navBar.NAV_ITEMS.NOTIFICATIONS);
        cy.url().should('include', '/notifications');
        cy.title().should('include', 'Notifications');
        notificationsPage.navBar.clickNavItem(notificationsPage.navBar.NAV_ITEMS.PAYMENTS);
        cy.url().should('include', '/payments');
        cy.title().should('include', 'Payments');
        paymentsPage.navBar.clickNavItem(paymentsPage.navBar.NAV_ITEMS.SETTINGS);
        cy.url().should('include', '/settings');
        cy.title().should('include', 'Settings');
        settingsPage.navBar.clickNavItem(settingsPage.navBar.NAV_ITEMS.ORDERS);
        cy.url().should('include', '/orders');
        cy.title().should('include', 'Orders');
        ordersPage.navBar.clickNavItem(ordersPage.navBar.NAV_ITEMS.PRODUCTS);
        cy.url().should('include', '/products');
        cy.title().should('include', 'Products');
    });
});
