import 'cypress-iframe'
import '@4tw/cypress-drag-drop'


describe('Handling Mouse hover',()=>
{
    it('Mouse Hover',()=>
    {
        cy.visit('https://demo.opencart.com/')
        
        cy.get('[id="narbar-menu"]>ul>li:nth-child(1)>div>div>ul>li:nth-child(2)>a').should('not.be.visible');
        cy.get('[id="narbar-menu"]>ul>li:nth-child(1)>a').trigger('mouseover').click();
        cy.get('[id="narbar-menu"]>ul>li:nth-child(1)>div>div>ul>li:nth-child(2)>a').should('be.visible').click();

    })

    it('Right click',()=>
    {
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        //Aproach 1
       /* cy.get('[class="context-menu-one btn btn-neutral"]').trigger('contextmenu')
        cy.get('[class="context-menu-list context-menu-root"]>li:nth-child(4)>span').click()*/

        //Aproach 2
        cy.get('[class="context-menu-one btn btn-neutral"]').rightclick()
        cy.get('[class="context-menu-list context-menu-root"]>li:nth-child(4)>span').click()
        
    })

    it('Double Click',()=>
    {
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')

         cy.frameLoaded('#iframeResult')

         //Aproach 1
         /*cy.iframe('#iframeResult').find('[ondblclick="myFunction()"]').trigger('dblclick')
         cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')*/

         //Aproach 2
         cy.iframe('#iframeResult').find('[ondblclick="myFunction()"]').dblclick()
         cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')
        
        
    })

    it('Drag and drop using plugin',()=>
    {
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box7').drag('#box107', {force: true} )

        
    })

    it('Scrolling page',()=>
    {
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

        cy.xpath("//img[@alt='Flag of India']").scrollIntoView({duration:8000})
        cy.xpath("//img[@alt='Flag of India']").should('be.visible')

        cy.xpath("//td[normalize-space()='Madagascar']").scrollIntoView({duration:8000})
        cy.xpath("//td[normalize-space()='Madagascar']").should('be.visible')

        cy.xpath("//a[normalize-space()='Contact us']").scrollIntoView({duration:3000})
        cy.xpath("//a[normalize-space()='Contact us']").should('be.visible')

        
    })
})