/// <reference types="cypress-xpath" />
import'cypress-iframe'



describe('Handling iFrame',()=>
{

    it('aproach 1',()=>
    {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        const iframe=cy.get('#mce_0_ifr').its('0.contentDocument.body').should('be.visible').then(cy.wrap)

        iframe.clear().type('Shashidhar {ctrl+a}') //select all text
        
        cy.xpath("//button[@title='Bold']//span[@class='tox-icon tox-tbtn__icon-wrap']//*[name()='svg']").click()
    })

    it('aproach 2 by using custom commond',()=>
    {
        cy.visit('https://the-internet.herokuapp.com/iframe')
         
//Instead of writting here put into comonds.js file
    /* Cypress.Commands.add('getIframe',(iframLocator)=>
    {
    return cy.get(iframLocator)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
    }) */
      
        cy.getIframe('#mce_0_ifr').clear().type('Shashidhar {ctrl+a}')
        cy.xpath("//button[@title='Bold']//span[@class='tox-icon tox-tbtn__icon-wrap']//*[name()='svg']").click()
    })


    it.only('aproach 1 load iframe plugin',()=>
    {
        cy.visit('https://the-internet.herokuapp.com/iframe');
         
       cy.frameLoaded("#mce_0_ifr")

        cy.iframe('#mce_0_ifr').clear().type('Shashidhar amrannavar {ctrl+a}')
        
        cy.xpath("//button[@title='Bold']//span[@class='tox-icon tox-tbtn__icon-wrap']//*[name()='svg']").click()
    })
})