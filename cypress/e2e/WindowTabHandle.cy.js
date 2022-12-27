/// <reference types="cypress" />

describe('handle Window tab ', ()=>
{
    it.skip('Approach 1', ()=>
    {
        cy.visit('https://the-internet.herokuapp.com/windows') //parent tab
        
        cy.get('#content>div>a').invoke('removeAttr','target').click()

        cy.url().should('eq','https://the-internet.herokuapp.com/windows/new') // child tab

        cy.go('back') //go to parent tab

    })

    it('Approach 2', ()=>
    {
        cy.visit('https://the-internet.herokuapp.com/windows') //parent tab
        
        cy.get('#content>div>a').then((att)=>
        {
            const url=att.prop('href')

            cy.visit(url)

            cy.url().should('eq','https://the-internet.herokuapp.com/windows/new') // child tab

            cy.go('back') //go to parent tab
        })

        
    })
})