class RegisterPage{
    get firstNameInputField(){
        return cy.get("#first-name");
    }
    get lastNameInputField(){
        return cy.get("#last-name");
    }
    get emailInputField(){
        return cy.get("#email");
    }
    get passwordInputField(){
        return cy.get("#password");
    }
    get passwordConfirmationInputField(){
        return cy.get("#password-confirmation");
    }
    get formCheckInput(){
        return cy.get(".form-check-input");
    }

    registerUser(firstName, lastName, email, password, passwordConfirmation){
        this.firstNameInputField.type(firstName);
        this.lastNameInputField.type(lastName);
        this.emailInputField.type(email);
        this.passwordInputField.type(password);
        this.passwordConfirmationInputField.type(passwordConfirmation);
        this.formCheckInput.check();
        cy.get("button").click();
    }
}

export const registerPage = new RegisterPage();