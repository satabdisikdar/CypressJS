import { Given,When, Then } from "cypress-cucumber-preprocessor/steps";
const url = "https://secure.splitwise.com/"

Given("I open Splitwise page", function(){
    cy.visit(url);
});

Then("I see {string} in the title", function(stringText){
    cy.xpath(`//h2[text()='${stringText}']`).should('exist');
});

When("I type {string} in the box", function(name){
    cy.xpath(`//input[@tabindex="1"]`).type(name);
});
