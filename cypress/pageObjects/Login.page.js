class LoginPage {
    static get url() {
      return "/";
    }
  
    static visit() {
        cy.visit(this.url);
    }

    static get usernameFiled(){
        return cy.get('[data-test="username"]');
    }

    static get passwordFiled(){
        return cy.get('[data-test="password"]');
    }

    static get loginButton(){
        return cy.get('[data-test="login-button"]');
    }

    static get errorMessage(){
        return cy.get('[data-test="error"]');
    }

    static logIntoPage(username, password) {
        this.usernameFiled.type("standard_user");
        this.passwordFiled.type("secret_sauce");
        this.loginButton.click();
    }
  }
  
  export default LoginPage;