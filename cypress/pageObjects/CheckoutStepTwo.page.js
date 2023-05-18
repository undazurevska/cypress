import BasePage from "./Base.page";

class CheckoutPageTwo extends BasePage {
    static get url() {
        return "/inventory.html";
    }
    static get finishBut() {
        return cy.get('[data-test="finish"]');
    }

    static get header() {
        return cy.get('.complete-header');
    }
}

export default CheckoutPageTwo;