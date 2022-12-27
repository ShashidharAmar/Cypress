
describe('data from fixture files',()=>
{         

it('taken data from fixture file',()=>
{
    cy.fixture('OrangeHRM2').then((data)=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        data.forEach((userdata) => {

        cy.get('[name="username"]').clear().type(userdata.username)
        cy.get('[name="password"]').clear().type(userdata.password)
        cy.get('[type="submit"]').click()
        cy.wait(2000)       
        
        if(userdata.username=='Admin' && userdata.password=='admin123')
        {
            cy.get('[class="oxd-topbar-header-breadcrumb"]>h6').should('have.text',userdata.expected)
            cy.get('[class="oxd-topbar-header-userarea"]>ul>li>span>p').click()
            cy.get('[class="oxd-dropdown-menu"]>li:nth-child(4)>a').click()
           
        }
        else{
            cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]')
            .should('have.text','Invalid credentials')
        }
            
        })
    })
  })
})