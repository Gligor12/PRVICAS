/// <reference types="Cypress" />

const locators = require ('../fixtures/locators.json');
import { createGallery } from '../page_objects/createGallery';

import { loginPage } from '../page_objects/loginPage';

describe("Create gallery functionality - Gallery App", ()=>{

    beforeEach(()=>{
       /* cy.visit("/login");
        //Login
        loginPage.loginFunction("peraperic12345@gmail.com" , "pera12345");*/

            cy.loginViaAPI();
            cy.visit("");
        })
    

   /* before(()=>{
        cy.visit("/login");
        cy.get(locators.loginPage.emailinputField).type("peraperic12345@gmail.com");
        cy.get(locators.loginPage.passwordInoutField).type("pera12345");
        cy.get(locators.commonElements.button).click();
    });*/

    it("Unsuccsessfull creation of gallery - Empty title" , ()=>{
       
        
        cy.get(locators.craeteGallery.pageURL).click();
        cy.url().should("contain" , "/create");
        cy.get(locators.commonElements.heading).should("contain" , "Create Gallery");
        cy.get(locators.commonElements.label).eq(0).should("have.text" , "Title:");
        cy.get(locators.commonElements.label).eq(1).should("have.text" , "Descriptions:");
        cy.get(locators.commonElements.label).eq(2).should("contain" , "Images:");
        
        //Creation of new gallery
        createGallery.createGalleryFunction(" ", "dasdadadad", "https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_1280.jpg");

        cy.url().should("contain" , "/create");
    });

    it("Unsuccsessfull creation of gallery - Empty images url" , ()=>{
       
       

       
        cy.get(locators.craeteGallery.pageURL).click();
        cy.url().should("contain" , "/create");
        cy.get(locators.commonElements.heading).should("contain" , "Create Gallery");
        cy.get(locators.commonElements.label).eq(0).should("have.text" , "Title:");
        cy.get(locators.commonElements.label).eq(1).should("have.text" , "Descriptions:");
        cy.get(locators.commonElements.label).eq(2).should("contain" , "Images:");

         //Creation of new gallery
        createGallery.createGalleryFunction("Test gallery", "dasdadadad", " ");

        cy.url().should("contain" , "/create");
    });

    it("Unsuccsessfull creation of gallery - Invalid format of images url" , ()=>{
       
        cy.get(locators.craeteGallery.pageURL).click();
        cy.url().should("contain" , "/create");
        cy.get(locators.commonElements.heading).should("contain" , "Create Gallery");
        cy.get(locators.commonElements.label).eq(0).should("have.text" , "Title:");
        cy.get(locators.commonElements.label).eq(1).should("have.text" , "Descriptions:");
        cy.get(locators.commonElements.label).eq(2).should("contain" , "Images:");
        //Creation of new gallery
        createGallery.createGalleryFunction("Test gallery", "dasdadadad", "https://gallery-app.vivifyideas.com/create");

        cy.get(locators.commonElements.verificationParagraph).contains("Wrong format of image").should("be.visible");
        cy.url().should("contain" , "/create");
    });

    it("Unsuccsessfull creation of gallery - Title contains less than 2 characters" , ()=>{
        
       

        
        cy.get(locators.craeteGallery.pageURL).click();
        cy.url().should("contain" , "/create");
        cy.get(locators.commonElements.heading).should("contain" , "Create Gallery");
        cy.get(locators.commonElements.label).eq(0).should("have.text" , "Title:");
        cy.get(locators.commonElements.label).eq(1).should("have.text" , "Descriptions:");
        cy.get(locators.commonElements.label).eq(2).should("contain" , "Images:");
        
        //Creation of new gallery
        createGallery.createGalleryFunction("T", "dasdadadad", "https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_1280.jpg");

        cy.get(locators.commonElements.verificationParagraph).contains("The title must be at least 2 characters.").should("be.visible");
        cy.url().should("contain" , "/create");
    });

   /* it("Unsuccsessfull creation of gallery - Not immage url address with added jpg extension" , ()=>{
        //Login
        cy.visit("/login");
        cy.get("#email").type("peraperic12345@gmail.com");
        cy.get("#password").type("pera12345");
        cy.get("button").click();

        //Creation of new gallery
        cy.get("a[href='/create']").click();
        cy.url().should("contain" , "/create");
        cy.get("h1").should("contain" , "Create Gallery");
        cy.get("label").eq(0).should("have.text" , "Title:");
        cy.get("label").eq(1).should("have.text" , "Descriptions:");
        cy.get("label").eq(2).should("contain" , "Images:");

        cy.get("#title").type("Tsdfds");
        cy.get("#description").type("ajdbasjdbajd");
        cy.get("input[placeholder='image url']").type("https://gallery-app.vivifyideas.com.jpg");
        cy.get("button").contains("Submit").click();

        
        cy.url().should("not.contain" , "/create");
    });*/



    it("Succsessfull creation of gallery", ()=>{
        //Login
        
        
        //Creation of new gallery
        cy.get(locators.craeteGallery.pageURL).click();
        cy.url().should("contain" , "/create");
        cy.get(locators.commonElements.heading).should("contain" , "Create Gallery");
        cy.get(locators.commonElements.label).eq(0).should("have.text" , "Title:");
        cy.get(locators.commonElements.label).eq(1).should("have.text" , "Descriptions:");
        cy.get(locators.commonElements.label).eq(2).should("contain" , "Images:");

        createGallery.createGalleryFunction("Test gallery Gligor", "dasdadadad", "https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_1280.jpg");

        //Redirecting to All Galleries page
        cy.url().should("not.contain" , "/create");
        cy.get(locators.commonElements.heading).should('contain', "All Galleries");

       /* cy.get(".box-title").eq(0).click();

        cy.get("button").contains("Delete Gallery").click();

        cy.window().then((win) => {
            cy.stub(win, 'confirm').returns(true); // Simulira pritisak na "OK"
          }); */

    });
});