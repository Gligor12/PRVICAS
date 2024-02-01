/// <reference types="Cypress" />

import { registerPage } from "../page_objects/registerPage";
const locators = require ("../fixtures/locators.json");

describe("Registration functionality - Gallery App", () => {
    it("Unsuccessful registration - invalid email address", () => {
      cy.visit("/register");
  
      //ASERTACIJE
      // provera da li smo na ispravnoj adresi
      cy.url().should("contain", "/register");
      //provera da li je neki tekst tacan
      cy.get("h1").should("have.text", "Register");
      cy.get(locators.commonElements.label).eq(0).should("have.text", "First Name");
      cy.get(locators.commonElements.label).eq(1).should("have.text", "Last Name");
      
  
      // hvatanje elemenata preko ID-ja === #vrednost ID-ja
      registerPage.registerUser("John", "Smith", "johnsmith12+1@gmail.com", "john1234", "john12345")
  
      cy.url().should("not.contain", "/register");
    });
  
    it("Unsuccessful registration - password too short", () => {
      cy.visit("/register");
  
      registerPage.registerUser("John", "Smith", "johnsmith12@gmail.com", "joh", "joh")
    });
  
    it("Unsuccessful registration - wrong password confirmation", () => {
      cy.visit("/register");
  
      registerPage.registerUser("John", "Smith", "johnsmith12@gmail.com", "john1234", "john12345");
    });
  
    it("Successful registration", () => {
      cy.visit("/register");
  
      registerPage.registerUser("John", "Smith", "johnsmith12@gmail.com", "john1234", "john1234",)
  
      cy.wait(3000);
  
      cy.get("a").contains("Logout").click();
      cy.url().should("not.contain", "/register");
    });
  });