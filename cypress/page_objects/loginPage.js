class LoginPage{
    get emailInputField(){
        return cy.get("#email");
    }
    get passwordInputField(){
        return cy.get("#password");
    }
    get submitBtn(){
        return cy.get("button");
    }

    loginFunction(email , password ) {
        this.emailInputField.type(email);

        this.passwordInputField.type(password);

        this.submitBtn.click();

    }
}

export const loginPage = new LoginPage();