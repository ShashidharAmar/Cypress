
describe('Handling tables',()=>
{
    beforeEach('Login page',()=>
    {
        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get('.btn').click()
        cy.get('.btn-close').click()
        cy.get('#menu-customer').click()
        cy.get('[id="collapse-5"]>li:nth-child(1)>a').click()

    })

    it('Count rows and colomns',()=>
    {
        cy.get('[class="table table-bordered table-hover"]>tbody>tr').should('have.length','10')
        cy.get('[class="table table-bordered table-hover"]>thead>tr>td').should('have.length','07')
    })

    it('check cell data from specific row and columns',()=>
    {
      cy.get('[class="table table-bordered table-hover"]>tbody>tr:nth-child(5)>td:nth-child(3)')
      .should('contain','mai.tran+1@ekoios.vn')
    })

    it.only('read all the data from the table',()=>
    {
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').each(($row,index,$rows)=>
        {
            cy.wrap($row).within(()=>
            {
                cy.get('td').each(($col,index,cols)=>
                {
                    cy.log($col.text().toUpperCase()) 
                })
            })

        })
    })
})