/// <reference types="Cypress" />

describe("Login functionality - Gallery App", ()=>{

    it("Unsuccessfull login - wrong email" , ()=>{
        cy.visit("https://gallery-app.vivifyideas.com/login");

        cy.get("#email").type("peraps@gmail.com");
        cy.get("#password").type("pera12345");
        cy.get("button").click();
    }); 

    it("Unsuccessfull login - empty password" , ()=>{
        cy.visit("https://gallery-app.vivifyideas.com/login");

        cy.get("#email").type("peraps@gmail.com");
        cy.get("#password").type(" ");
        cy.get("button").click();
    }); 


    it("Unsuccessfull login - empty email" , ()=>{
        cy.visit("https://gallery-app.vivifyideas.com/login");

        cy.get("#email").type(" ");
        cy.get("#password").type("trge");
        cy.get("button").click();
    });
    
    it("Unsuccessfull login - wrong password" , ()=>{
        cy.visit("https://gallery-app.vivifyideas.com/login");

        cy.get("#email").type("peraperic12345@gmail.com");
        cy.get("#password").type("pera12s");
        cy.get("button").click();
    });

    it("Successfull login" , ()=>{
        cy.visit("https://gallery-app.vivifyideas.com/login");

        cy.get("#email").type("peraperic12345@gmail.com");
        cy.get("#password").type("pera12345");
        cy.get("button").click();
        cy.get("a").contains('Logout').click();
        //cy.get('a[role="button "]').click();
    });

    
});