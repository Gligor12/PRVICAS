/// <reference types="Cypress" />

const locators = require ('../fixtures/locators.json');


import { loginPage } from '../page_objects/loginPage';
import { editGallery } from '../page_objects/editGalleryPage';

describe("Edit Gallery functionality", ()=>{
    beforeEach(()=>{
        cy.visit("/login");
        //Login
        loginPage.loginFunction("peraperic12345@gmail.com" , "pera12345");
    });

    it("Unsuccessfull edited gallery - title less than 2 characters", ()=>{
        cy.get("a[href='/my-galleries']").click();
        cy.get(".cell").eq(0).children().children().eq(0).click();
        cy.get(".btn-custom").eq(1).click();

        editGallery.editGalleryFunction("C" , "Cypress edit description");

        cy.get(".alert-danger").should("be.visible").and("have.text" , "The title must be at least 2 characters.");
    });

    it("Successfully edited gallery", ()=>{
        
        cy.get("a[href='/my-galleries']").click();
        cy.get(".cell").eq(0).children().children().eq(0).click();
        cy.get(".btn-custom").eq(1).click();

        editGallery.editGalleryFunction("Cypress Edit" , "Cypress edit description")
       
    });
});