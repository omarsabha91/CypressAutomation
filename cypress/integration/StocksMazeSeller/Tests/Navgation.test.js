
import SignInPage from '../Pages/SignInPage';
import DashBoardPage from '../Pages/DashBoardPage';
import OrdersPage from '../Pages/OrdersPage';
import NotificationsPage from "../Pages/NotifcationsPage";
import PaymentsPage from "../Pages/PaymentsPage";
import SettingsPage from "../Pages/SettingsPage";
import ProductsPage from "../Pages/ProductsPage";
describe('StocksMazeSeller Navigations Test', () => {
    const signInPage = new SignInPage();
    const dashBoardPage = new DashBoardPage();
    const ordersPage = new OrdersPage();
    const settingsPage = new SettingsPage();
    const paymentsPage = new PaymentsPage();
    const notificationsPage = new NotificationsPage();
    const productsPage = new ProductsPage();

    function navigateAndVerify(page, navItem, expectedUrl, expectedTitle) {
        page.navBar.clickNavItem(navItem);
        cy.url().should('include', expectedUrl);
        cy.title().should('include', expectedTitle);
    }

    it('should Navigate to all pages successfully', () => {

        signInPage.visit();
        signInPage.typeUsername(Cypress.env('username'));
        signInPage.typePassword(Cypress.env('password'));
        signInPage.submit();

        const navigationSteps = [
            { page: dashBoardPage, navItem: dashBoardPage.navBar.NAV_ITEMS.NOTIFICATIONS, expectedUrl: '/notifications', expectedTitle: 'Notifications' },
            { page: notificationsPage, navItem: notificationsPage.navBar.NAV_ITEMS.PRODUCTS, expectedUrl: '/products', expectedTitle: 'Products' },
            { page: productsPage, navItem: productsPage.navBar.NAV_ITEMS.ORDERS, expectedUrl: '/orders', expectedTitle: 'Orders' },
            { page: ordersPage, navItem: ordersPage.navBar.NAV_ITEMS.PAYMENTS, expectedUrl: '/payments', expectedTitle: 'Payments' },
            { page: paymentsPage, navItem: paymentsPage.navBar.NAV_ITEMS.SETTINGS, expectedUrl: '/settings', expectedTitle: 'Settings' },
            { page: settingsPage, navItem: settingsPage.navBar.NAV_ITEMS.HOME, expectedUrl: '/dashboard', expectedTitle: 'Dashboard' }
        ];

        navigationSteps.forEach(step => {
            navigateAndVerify(step.page, step.navItem, step.expectedUrl, step.expectedTitle);
        });

    });
});
