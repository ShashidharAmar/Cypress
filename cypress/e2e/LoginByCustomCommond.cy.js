describe('By using custom commond',()=>
{         

   it('using custom commond',()=>
   {
      cy.fixture('OrangeHRM2').then((data)=>
      {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.LoginApp('Admin','admin123')
        cy.xpath("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should('have.text','dasda')

        
      })
    })
})