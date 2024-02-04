/// <reference types="Cypress" />

describe("register via API" , ()=>{
    
    before(()=>{
        cy.request({
            url: "https://gallery-api.vivifyideas.com/api/auth/register",
            method: "POST",
            body: {
                first_name:"Milan",
                last_name:"Milanovic",
                email:"milan1228@gmail.com",
                password:"milan123",
                password_confirmation:"milan123",
                terms_and_conditions:true
            },
        }).its("body").then((resp)=>{
            
            expect(resp.access_token).to.be.a("string");
            expect(resp.token_type).eq("bearer");
            // expect(resp.expires_in).to.be.a("number");

            window.localStorage.setItem("token", resp.access_token);
            window.localStorage.setItem("user_id" , resp.user_id);
        });
    })
    
    it("Successfull login via API", ()=>{
        cy.request({
            url: "https://gallery-api.vivifyideas.com/api/auth/logout",
            method: "POST",
            auth:{
                'bearer' : window.localStorage.getItem("token")
            } 
        }).then(()=>{
            window.localStorage.clear()
            }
        );

        cy.visit("");
       
    });


});