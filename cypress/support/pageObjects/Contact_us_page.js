/// <reference types='Cypress'/>

class Contact_us_page {
    
    goToContactForm(){
        cy.visit('http://automationpractice.com/index.php?controller=contact')
    }

    sendFormWithBasicData(subjectMessage,email,messageContent){
        cy.get('#id_contact').select(subjectMessage)
        cy.get('#email').type(email)
        cy.get('#message').type(messageContent)
        cy.get('#submitMessage').click()
    }

    assertThatAlertSuccessContainsGivenText(expectedText){
        cy.get("p[class='alert alert-success']").should('have.text',expectedText)
    }
}


export default Contact_us_page