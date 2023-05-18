import LoginPage from "../../pageObjects/Login.page";
import HomePage from "../../pageObjects/Home.page";
import CheckoutPage from "../../pageObjects/CheckoutStepOne.page";
import CheckoutPageTwo from "../../pageObjects/CheckoutStepTwo.page";
import CartsPage from "../../pageObjects/Carts.page";

describe("Saucedemo", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("1. Scenario 1", () => {
    LoginPage.usernameFiled.type("standard_user");
    LoginPage.passwordFiled.type("secret_sauce");
    LoginPage.loginButton.should("be.visible");
    LoginPage.loginButton.click();
    LoginPage.loginButton.should("not.exist");
     // Click on Burger/Stack icon
     HomePage.stackIcon.click();
     // Click logout button
     // Validate that we see login button
  });

  it("2 Login scenario - Negative case",() =>{
    LoginPage.usernameFiled.type("standard_user");
    LoginPage.passwordFiled.type("xxx");
    LoginPage.loginButton.click();
    LoginPage.errorMessage.should("have.text", "Epic sadface: Username and password do not match any user in this service");
  })

  it("3. Logout scenario", () =>{
    LoginPage.usernameFiled.type("standard_user");
    LoginPage.passwordFiled.type("secret_sauce");
    LoginPage.loginButton.click();
    HomePage.sideBar.invoke("attr", "aria-hidden").should("eq","true");
    HomePage.stackIcon.click();
    HomePage.sideBar.invoke("attr", "aria-hidden").should("eq","false");
    HomePage.logoutButton.should("be.visible");
  })

  it("4. Add items to cart", () => {
    LoginPage.usernameFiled.type("standard_user");
    LoginPage.passwordFiled.type("secret_sauce");
    LoginPage.loginButton.click();
    HomePage.SauceLabOnesieAddCartButton.click();
    HomePage.SauceLabBackpackAddCartButton.click();
    HomePage.SauceLabTShirtAddCartButton.click();
    HomePage.ShopingCartBadge.scrollIntoView().should("have.text", "3");
  })

  it("5. Add and remove itme", () =>{
    LoginPage.logIntoPage("standard_user", "secret_sauce");
    HomePage.SauceLabBackpackAddCartButton.click();
    HomePage.ShopingCartBadge.scrollIntoView().should("have.text", "1");
    HomePage.removeSauceLabBackpackAddCartButton.click();
    HomePage.ShopingCartBadge.should("not.exist");
  })

  it("6. Open specific item, and validate title", ()=>{
    LoginPage.logIntoPage("standard_user", "secret_sauce");
    HomePage.itemNames.contains('Sauce Labs Backpack').click();
    HomePage.inventoryItemNames.should("have.text", "Sauce Labs Backpack");
  })
  
  it.only("7. Buy Item", ()=>{
    LoginPage.logIntoPage("standard_user", "secret_sauce");
    HomePage.SauceLabOnesieAddCartButton.click();
    HomePage.SauceLabBackpackAddCartButton.click();
    HomePage.ShopingCartLink.click();
    CartsPage.itemNames.should("have.text","Sauce Labs OnesieSauce Labs Backpack");
    CartsPage.cartItemList.should("have.length",2);
    CartsPage.Checkout.click();
    CheckoutPage.firstName.type("user");
    CheckoutPage.lastName.type("user");
    CheckoutPage.postalName.type("lv-0000");
    CheckoutPage.continueBut.click();
    CheckoutPage.checkoutSum.should("have.text", "Total: $41.02");
    CheckoutPageTwo.finishBut.click();
    CheckoutPageTwo.header.should("have.text", "Thank you for your order!");


  })

});