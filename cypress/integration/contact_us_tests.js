/// <reference types='Cypress'/>

import Contact_us_page from "../support/pageObjects/contact_us_page"

describe("Test contact us form",()=>{
    const contact_us_page = new Contact_us_page();

    beforeEach(function(){
        contact_us_page.goToContactForm()
    })

    it("The user sends the contact form",()=>{
        contact_us_page.sendFormWithBasicData('Webmaster','test@test.com','Lorem ipsum')
        contact_us_page.assertThatAlertSuccessContainsGivenText('Your message has been successfully sent to our team.')
    })

    it("The user sends the contact form without message content",()=>{
        contact_us_page.sendFormWithBasicDataWithoutContent('Webmaster','test@test.com')
        contact_us_page.assertThatErrorAlertContainsGivenText('The message cannot be blank.')

    })

    it("The user sends the contact form without email",()=>{
        contact_us_page.sendFormWithBasicDataWithoutEmail('Webmaster','Lorem ipsum')
        contact_us_page.assertThatErrorAlertContainsGivenText("Invalid email address.")
    })

    it("The user sends the contact form without subject heading",()=>{
        contact_us_page.sendFormWithBasicDataWithoutSubjectMessage('test@test.com','Lorem ipsum')
        contact_us_page.assertThatErrorAlertContainsGivenText('Please select a subject from the list provided. ')
    })
})