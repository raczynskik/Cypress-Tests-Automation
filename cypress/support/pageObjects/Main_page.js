/// <reference types='Cypress'/>

class Main_page {
    
    goToMainPage(){
        cy.visit('http://automationpractice.com/index.php')
    }
}

export default Main_page