/// <reference types='Cypress'/>

class Footer_component{

    enterEmailToNewsletterInput(email){
        cy.get('#newsletter-input').type(email).type('{enter}')

    }

}

export default Footer_component

