
describe('data from fixture files',()=>
{
   /* it('taken data from fixture file',()=>
    {
        //Direct Access
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture("OrangeHRM.json").then((data)=>
        {
            cy.get('[name="username"]').clear().type(data.username)
            cy.get('[name="password"]').clear().type(data.password)
            cy.get('[type="submit"]').click()
            cy.get('[class="oxd-topbar-header-breadcrumb"]>h6').should('have.text',data.expected)
            cy.wait(5000)

        })*/


        //Access through hook -for multiple it block
        let userdata;
        before(()=>
        {
            cy.fixture('OrangeHRM').then((data)=>
            {
                userdata=data
            })
        })

        it('taken data from fixture file',()=>
       {
  
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

         
            cy.get('[name="username"]').clear().type(userdata.username)
            cy.get('[name="password"]').clear().type(userdata.password)
            cy.get('[type="submit"]').click()
            cy.get('[class="oxd-topbar-header-breadcrumb"]>h6').should('have.text',userdata.expected)
       
    })
})
