/// <reference types='Cypress'/>

import Contact_us_page from "../support/pageObjects/contact_us_page"

describe("Test contact us form",()=>{
    const contact_us_page = new Contact_us_page();

    beforeEach(function(){
        contact_us_page.goToContactForm()
    })

    it.only("The user sends the contact form",()=>{
        contact_us_page.sendFormWithBasicData('Webmaster','test@test.com','Lorem ipsum')
        contact_us_page.assertThatAlertSuccessContainsGivenText('Your message has been successfully sent to our team.')
    })

    it("The user sends the contact form without message content",()=>{

    })

    it("The user sends the contact form without email",()=>{

    })

    it("The user sends the contact form without subject heading",()=>{

    })
})