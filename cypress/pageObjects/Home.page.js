import BasePage from "./Base.page";

class HomePage extends BasePage {
  static get url() {
    return "/inventory.html";
  }

  static get stackIcon() {
    return cy.get("#react-burger-menu-btn");
  }

  static get sideBar() {
    return cy.get(".bm-menu-wrap");
  }

  static get logoutButton() {
    return cy.get("#logout_sidebar_link");
  }

  static get addToCartSauceLabsBackpack() {
    return cy.get("");
  }

  static get SauceLabBackpackAddCartButton() {
    return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
  }
  static get SauceLabTShirtAddCartButton() {
    return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
  }
  static get SauceLabOnesieAddCartButton() {
    return cy.get('[data-test="add-to-cart-sauce-labs-onesie"]');
  }
  static get ShopingCartBadge() {
    return cy.get(".shopping_cart_badge");
  }

  static get cartItemList() {
    return cy.get(".cart_item");
  }

  static get removeSauceLabBackpackAddCartButton() {
    return cy.get('#remove-sauce-labs-backpack');
  }

  static get getTShirtItemName() {
    return cy.get('#item_1_title_link');
  }

  static get itemNames() {
    return cy.get(".inventory_item_name");
  }

  static get inventoryItemNames() {
    return cy.get(".inventory_details_name");
  }

  static get ShopingCartLink() {
    return cy.get(".shopping_cart_link");
  }

  static get Checkout() {
    return cy.get("#checkout");
  }
}


export default HomePage;