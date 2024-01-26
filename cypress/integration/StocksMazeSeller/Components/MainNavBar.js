

class MainNavBar {

    NAV_ITEMS = {
        HOME: 'Home',
        SETTINGS: 'Settings',
        ORDERS: 'Orders',
        NOTIFICATIONS: 'Notifications',
        PRODUCTS: 'Products',
        PAYMENTS: 'Payments'
    };


    clickNavItem(text) {
        cy.get('#mynavbar').contains('span.nav-link-text', text).click();
    }


}

export default MainNavBar;
