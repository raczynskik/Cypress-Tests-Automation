/// <reference types='Cypress'/>

import faker from "faker";
import Footer_component from "../support/component/Footer_component";
import Contact_us_page from "../support/pageObjects/contact_us_page";
import Main_page from "../support/pageObjects/Main_page"

describe('Veryfing send newsletter flow',()=>{
    const main_page = new Main_page();
    const footer_component = new Footer_component();

    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php?controller=contact')
    })

    it('The new user subscribes to the newsletter',()=>{
        var randomEmail = faker.internet.email()

        footer_component.enterEmailToNewsletterInput(randomEmail)
        main_page.assertThatSuccessAlertHaveCorrectContent(" Newsletter : You have successfully subscribed to this newsletter.")
    })

    it('The new user enter wrong email',()=>{
        footer_component.enterEmailToNewsletterInput('wrongEmailValue')
        main_page.assertThatDangerAlertHaveCorrectContent(' Newsletter : Invalid email address.')
    })

})

