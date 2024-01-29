/// <reference types="Cypress" />

const locators = require ('../fixtures/locators.json');

import { loginPage } from '../page_objects/loginPage';


describe("Login functionality - Gallery App", ()=>{

    it("Unsuccessfull login - wrong email" , ()=>{
        cy.visit("/login");
        cy.url().should('contain', '/login');
        cy.get(locators.loginPage.heading).should('have.text' , 'Please login');
        cy.get(locators.loginPage.inputFieldLabel).eq(0).should('have.text', 'Email');
        cy.get(locators.loginPage.inputFieldLabel).eq(1).should('have.text', 'Password');
        cy.get(locators.loginPage.submitButton).should('have.text', "Submit");
        

        loginPage.emailInputField.
        should('be.empty').
        type("peraps@gmail.com");
        loginPage.passwordInputField.type("pera12345");
        loginPage.submitBtn.click();

        cy.get('p').contains('Bad Credentials').should('be.visible').and('contain','Bad Credentials');
        cy.url().should('contain', '/login');
    }); 

    it("Unsuccessfull login - empty password" , ()=>{
        cy.visit("/login");

        cy.get(locators.loginPage.emailinputField).should('be.empty').type("peraps@gmail.com");
        cy.get(locators.loginPage.passwordInoutField).type(" ");
        cy.get(locators.loginPage.submitButton).click();
    }); 


    it("Unsuccessfull login - empty email" , ()=>{
        cy.visit("/login");

        cy.get(locators.loginPage.emailinputField).type(" ");
        cy.get(locators.loginPage.passwordInoutField).type("trge");
        cy.get(locators.loginPage.submitButton).click();
    });
    
    it("Unsuccessfull login - wrong password" , ()=>{
        cy.visit("/login");

        cy.get(locators.loginPage.emailinputField).type("peraperic12345@gmail.com");
        cy.get(locators.loginPage.passwordInoutField).type("pera12s");
        cy.get(locators.loginPage.submitButton).click();
    });

    it("Successfull login" , ()=>{
        cy.visit("/login");

        cy.get(locators.loginPage.heading).should('have.text' , 'Please login');
        cy.get(locators.loginPage.inputFieldLabel).eq(0).should('have.text', 'Email');
        cy.get(locators.loginPage.inputFieldLabel).eq(1).should('have.text', 'Password');

        loginPage.loginFunction("peraperic12345@gmail.com" , "pera12345");
        /*cy.get(locators.loginPage.emailinputField).type("peraperic12345@gmail.com").should("have.value" , "peraperic12345@gmail.com");
        cy.get(locators.loginPage.passwordInoutField).type("pera12345");
        cy.get(locators.loginPage.submitButton).click();*/
        cy.get("a").contains('Logout').click();
        //cy.get('a[role="button "]').click();

        cy.url().should('not.contain', '/login');
    });

    
});