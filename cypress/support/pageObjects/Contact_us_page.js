/// <reference types='Cypress'/>

class Contact_us_page {
    
    goToContactForm(){
        cy.visit('http://automationpractice.com/index.php?controller=contact')
    }


}


export default Contact_us_page