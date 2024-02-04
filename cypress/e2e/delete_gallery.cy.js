/// <reference types="Cypress" />


describe("Delete gallery functionality - Gallery App", ()=>{
    before(()=>{
        cy.loginViaAPI();   
    });

    it("Successfully deleted gallery" , ()=>{

        //Create new gallery via API
        cy.request({
            url: "https://gallery-api.vivifyideas.com/api/galleries",
            method: "POST",
            body:{
                title: "New Gallery",
                description: " ",
                images: ["https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg"]
            },
            auth:{
                'bearer' : window.localStorage.getItem("token")
            } 
        }).its("body").then((resp)=>{
            let galleryId= resp.id;
            cy.log("Gallery Id: " + galleryId); 

            cy.visit("");

            cy.get("a[href='/my-galleries']").click();
            cy.get(".title-style").should("have.text" , "My Galleries");
            cy.get(".box-title").eq(0).click();

            cy.url().should("contain" , galleryId);
            cy.get(".title-style").should("have.text" , resp.title);
            
            // Delete gallery
            cy.get("button").contains("Delete Gallery").click();

            cy.window().then((win) => {
                cy.stub(win, 'confirm').returns(true); // Simulira pritisak na "OK"
            }); 

            cy.get(".title-style").should("have.text", "All Galleries");
        })
     
        });

    });

