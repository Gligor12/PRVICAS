/// <reference types="Cypress" />

describe("Create gallery functionality - Gallery App", ()=>{
    it("Unsuccsessfull creation of gallery - Empty title" , ()=>{
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

        cy.get("#title").type(" ");
        cy.get("#description").type("ajdbasjdbajd");
        cy.get("input[placeholder='image url']").type("https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_1280.jpg");
        cy.get("button").contains("Submit").click();

        cy.url().should("contain" , "/create");
    });

    it("Unsuccsessfull creation of gallery - Empty images url" , ()=>{
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

        cy.get("#title").type("Test gallery ");
        cy.get("#description").type("ajdbasjdbajd");
        cy.get("input[placeholder='image url']").type(" ");
        cy.get("button").contains("Submit").click();

        cy.url().should("contain" , "/create");
    });

    it("Unsuccsessfull creation of gallery - Invalid format of images url" , ()=>{
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

        cy.get("#title").type("Test gallery ");
        cy.get("#description").type("ajdbasjdbajd");
        cy.get("input[placeholder='image url']").type("https://gallery-app.vivifyideas.com/create");
        cy.get("button").contains("Submit").click();

        cy.get("p").contains("Wrong format of image").should("be.visible");
        cy.url().should("contain" , "/create");
    });

    it("Unsuccsessfull creation of gallery - Title contains less than 2 characters" , ()=>{
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

        cy.get("#title").type("T");
        cy.get("#description").type("ajdbasjdbajd");
        cy.get("input[placeholder='image url']").type("https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_1280.jpg");
        cy.get("button").contains("Submit").click();

        cy.get("p").contains("The title must be at least 2 characters.").should("be.visible");
        cy.url().should("contain" , "/create");
    });

    it("Unsuccsessfull creation of gallery - Not immage url address with added jpg extension" , ()=>{
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
    });



    it("Succsessfull creation of gallery", ()=>{
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

        cy.get("#title").type("Cypress test title");
        cy.get("#description").type("ajdbasjdbajd");
        cy.get("input[placeholder='image url']").type("https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_1280.jpg");
        cy.get("button").contains("Submit").click();

        //Redirecting to All Galleries page
        cy.url().should("not.contain" , "/create");
        cy.get("h1").should('contain', "All Galleries");

    });
});