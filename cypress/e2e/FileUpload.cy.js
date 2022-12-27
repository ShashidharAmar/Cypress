import 'cypress-file-upload';

describe('Handling File Upload',()=>
{
    it('Single file upload',()=>
    {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('git-cheat-sheet-education.pdf')
        cy.get('#file-submit').click()
        cy.wait(2000)
        cy.get('.example>h3').should('have.text','File Uploaded!')
    })

    it('file upload - Rename',()=>
    {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'git-cheat-sheet-education.pdf',fileName:'My git.pdf'})
        cy.get('#file-submit').click()
        cy.wait(2000)
        cy.get('.example>h3').should('have.text','File Uploaded!')
    })

    it('File upload - drag and drop',()=>
    {
        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#drag-drop-upload')
  .attachFile('git-cheat-sheet-education.pdf', { subjectType: 'drag-n-drop' });
          
  cy.get('#drag-drop-upload').contains('git-cheat-sheet-education.pdf')
        
    })

    it.only('Multiple file upload',()=>
    {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.xpath("//input[@id='filesToUpload']").attachFile(['git-cheat-sheet-education.pdf','QAResume.pdf']);
        cy.wait(5000)
        cy.get('#fileList>li').should('have.length','2')
    })



})