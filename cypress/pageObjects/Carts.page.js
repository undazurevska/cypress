import BasePage from "./Base.page";

class CartsPage extends BasePage {
    static get url() {
        return "/inventory.html";

    }

    static get cartItemList() {
        return cy.get(".cart_item");
      }

    static get itemNames() {
        return cy.get(".inventory_item_name");
    }

    static get ShopingCartLink() {
        return cy.get(".shopping_cart_link");
      }
    
    static get Checkout() {
        return cy.get("#checkout");
    }
}

export default CartsPage;