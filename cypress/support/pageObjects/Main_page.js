/// <reference types='Cypress'/>

class Main_page {
    
    goToMainPage(){
        cy.visit('http://automationpractice.com/index.php')
    }

    assertThatSuccessAlertHaveCorrectContent(expectedText){
        cy.get('.alert-success').should('have.text',expectedText)
    }

    assertThatDangerAlertHaveCorrectContent(expectedText){
        cy.get('.alert-danger').should('have.text',expectedText)
    }
}

export default Main_page