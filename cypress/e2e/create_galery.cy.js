/// <reference types="Cypress" />

const locators = require ('../fixtures/locators.json')

describe("Create gallery functionality - Gallery App", ()=>{

    beforeEach(()=>{
        cy.visit("/login");
        cy.get(locators.loginPage.emailinputField).type("peraperic12345@gmail.com");
        cy.get(locators.loginPage.passwordInoutField).type("pera12345");
        cy.get(locators.commonElements.button).click();
    });

   /* before(()=>{
        cy.visit("/login");
        cy.get(locators.loginPage.emailinputField).type("peraperic12345@gmail.com");
        cy.get(locators.loginPage.passwordInoutField).type("pera12345");
        cy.get(locators.commonElements.button).click();
    });*/

    it("Unsuccsessfull creation of gallery - Empty title" , ()=>{
        //Login
        

        //Creation of new gallery
        cy.get(locators.craeteGallery.pageURL).click();
        cy.url().should("contain" , "/create");
        cy.get(locators.commonElements.heading).should("contain" , "Create Gallery");
        cy.get(locators.commonElements.label).eq(0).should("have.text" , "Title:");
        cy.get(locators.commonElements.label).eq(1).should("have.text" , "Descriptions:");
        cy.get(locators.commonElements.label).eq(2).should("contain" , "Images:");

        cy.get(locators.craeteGallery.titleInputField).type(" ");
        cy.get(locators.craeteGallery.descriptionInputField).type("ajdbasjdbajd");
        cy.get(locators.craeteGallery.imgURLInputField).type("https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_1280.jpg");
        cy.get(locators.commonElements.button).contains("Submit").click();

        cy.url().should("contain" , "/create");
    });

    it("Unsuccsessfull creation of gallery - Empty images url" , ()=>{
        //Login
       

        //Creation of new gallery
        cy.get(locators.craeteGallery.pageURL).click();
        cy.url().should("contain" , "/create");
        cy.get(locators.commonElements.heading).should("contain" , "Create Gallery");
        cy.get(locators.commonElements.label).eq(0).should("have.text" , "Title:");
        cy.get(locators.commonElements.label).eq(1).should("have.text" , "Descriptions:");
        cy.get(locators.commonElements.label).eq(2).should("contain" , "Images:");

        cy.get(locators.craeteGallery.titleInputField).type("Test gallery ");
        cy.get(locators.craeteGallery.descriptionInputField).type("ajdbasjdbajd");
        cy.get(locators.craeteGallery.imgURLInputField).type(" ");
        cy.get(locators.commonElements.button).contains("Submit").click();

        cy.url().should("contain" , "/create");
    });

    it("Unsuccsessfull creation of gallery - Invalid format of images url" , ()=>{
        //Login
       

        //Creation of new gallery
        cy.get(locators.craeteGallery.pageURL).click();
        cy.url().should("contain" , "/create");
        cy.get(locators.commonElements.heading).should("contain" , "Create Gallery");
        cy.get(locators.commonElements.label).eq(0).should("have.text" , "Title:");
        cy.get(locators.commonElements.label).eq(1).should("have.text" , "Descriptions:");
        cy.get(locators.commonElements.label).eq(2).should("contain" , "Images:");

        cy.get(locators.craeteGallery.titleInputField).type("Test gallery ");
        cy.get(locators.craeteGallery.descriptionInputField).type("ajdbasjdbajd");
        cy.get(locators.craeteGallery.imgURLInputField).type("https://gallery-app.vivifyideas.com/create");
        cy.get(locators.commonElements.button).contains("Submit").click();

        cy.get(locators.commonElements.verificationParagraph).contains("Wrong format of image").should("be.visible");
        cy.url().should("contain" , "/create");
    });

    it("Unsuccsessfull creation of gallery - Title contains less than 2 characters" , ()=>{
        //Login
       

        //Creation of new gallery
        cy.get(locators.craeteGallery.pageURL).click();
        cy.url().should("contain" , "/create");
        cy.get(locators.commonElements.heading).should("contain" , "Create Gallery");
        cy.get(locators.commonElements.label).eq(0).should("have.text" , "Title:");
        cy.get(locators.commonElements.label).eq(1).should("have.text" , "Descriptions:");
        cy.get(locators.commonElements.label).eq(2).should("contain" , "Images:");

        cy.get(locators.craeteGallery.titleInputField).type("T");
        cy.get(locators.craeteGallery.descriptionInputField).type("ajdbasjdbajd");
        cy.get(locators.craeteGallery.imgURLInputField).type("https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_1280.jpg");
        cy.get(locators.commonElements.button).contains("Submit").click();

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

        cy.get(locators.craeteGallery.titleInputField).type("Cypress test title");
        cy.get(locators.craeteGallery.descriptionInputField).type("ajdbasjdbajd");
        cy.get(locators.craeteGallery.imgURLInputField).type("https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_1280.jpg");
        cy.get(locators.commonElements.button).contains("Submit").click();

        //Redirecting to All Galleries page
        cy.url().should("not.contain" , "/create");
        cy.get(locators.commonElements.heading).should('contain', "All Galleries");

    });
});