/// <reference types='Cypress'/>

class Main_page {
    
    goToMainPage(){
        cy.visit('http://automationpractice.com/index.php')
    }

    enterEmailToNewsletterInput(email){
        cy.get('#newsletter-input').type(email).type('{enter}')

    }
}

export default Main_page