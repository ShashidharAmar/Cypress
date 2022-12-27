 

describe('Prompt Popup', ()=>
{
    it('checking Prompt with ok', ()=>
    {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
          
        cy.window().then((win)=>
        {
           cy.stub(win,"prompt").returns('Shashidhar Amarannavar');
        })
       
        cy.get('button[onclick="jsPrompt()"]').click()
       

        cy.get('#result').should('have.text','You entered: Shashidhar Amarannavar')
    })

})