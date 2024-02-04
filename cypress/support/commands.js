// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginViaAPI', (email = "peraperic12345@gmail.com", password = "pera12345") => { 
    cy.request({
        url: "https://gallery-api.vivifyideas.com/api/auth/login",
        method: "POST",
        body:{
            email: email,
            password: password
        }
    }).its("body").then((resp)=>{
        let respToken = resp.access_token;
        let tokenType = resp.token_type;
        let user_id= resp.user_id;

        expect(respToken).to.be.a("string");
        expect(tokenType).eq("bearer");

        window.localStorage.setItem("token", respToken);
        window.localStorage.setItem("user_id" , user_id);
        
    })
 });

 Cypress.Commands.add("createGalleryViaAPI", (title = "New gallery" , description="" , imgUrl=["https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg"]) =>{
    cy.request({
        url: "https://gallery-api.vivifyideas.com/api/galleries",
        method: "POST",
        body:{
            title: title,
            description: description,
            images: imgUrl
        }
    }).its("body").then((resp)=>{
        let galleryId= resp.id;
        cy.log(galleryId);

    })
 })