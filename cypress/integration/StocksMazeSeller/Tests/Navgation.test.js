
import SignInPage from '../Pages/SignInPage';
import DashBoardPage from '../Pages/DashBoardPage';
import ProductsPage from '../Pages/ProductsPage';
import OrdersPage from '../Pages/OrdersPage';
import NotificationsPage from "../Pages/NotifcationsPage";
import PaymentsPage from "../Pages/PaymentsPage";
import SettingsPage from "../Pages/SettingsPage";
describe('StocksMazeSeller Sign In Test', () => {
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
        cy.title().should('include', 'dashboard');
        dashBoardPage.navBar.clickNavItem(dashBoardPage.navBar.NAV_ITEMS.NOTIFICATIONS);
        cy.url().should('include', '/notifications');
        cy.title().should('include', 'notifications');
        notificationsPage.navBar.clickNavItem(notificationsPage.navBar.NAV_ITEMS.PAYMENTS);
        cy.url().should('include', '/payments');
        cy.title().should('include', 'payments');
        paymentsPage.navBar.clickNavItem(paymentsPage.navBar.NAV_ITEMS.SETTINGS);
        cy.url().should('include', '/settings');
        cy.title().should('include', 'settings');
        settingsPage.navBar.clickNavItem(settingsPage.navBar.NAV_ITEMS.ORDERS);
        cy.url().should('include', '/orders');
        cy.title().should('include', 'orders');
        ordersPage.navBar.clickNavItem(ordersPage.navBar.NAV_ITEMS.PRODUCTS);
        cy.url().should('include', '/products');
        cy.title().should('include', 'products');
    });
});
