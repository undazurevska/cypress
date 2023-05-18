import BasePage from "./Base.page";

class CheckoutPage extends BasePage {
    static get url() {
        return "/inventory.html";

    }

    static get firstName() {
        return cy.get("#first-name");
    }

    static get lastName() {
        return cy.get("#last-name");
    }
    static get postalName() {
        return cy.get("#postal-code");
    }

    static get checkoutSum() {
        return cy.get(".summary_total_label");
    }

    static get continueBut() {
        return cy.get('[data-test="continue"]');
    }

    static get finishBut() {
        return cy.get('[data-test="finish"]');
    }
}

export default CheckoutPage;