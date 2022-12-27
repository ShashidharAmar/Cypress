
describe('Authentication popup',()=>
{
    it('handle authentication popup',()=>
    {
       cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{ username:"admin", password:"admin" }})

    cy.get('#content>div>p').should('have.contain','Congratulations')


       })

    })
   
