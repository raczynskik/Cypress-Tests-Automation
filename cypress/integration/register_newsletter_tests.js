/// <reference types='Cypress'/>

import Main_page from "../support/pageObjects/Main_page"

describe('Veryfing send newsletter flow',()=>{
    const main_page = new Main_page();

    beforeEach(function(){
        main_page.goToMainPage()
    })

    it('The new user subscribes to the newsletter',()=>{
        main_page.enterEmailToNewsletterInput('test@test.com')
    })

})

