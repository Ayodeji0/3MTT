
describe('CSS LOCATOR', ()=>{
    it('go to', ()=>{
        cy.visit('https://vtu.ng/dashboard/?action=register')
       cy.get('#reg_username').type('deji')
       cy.get('#reg_email').type('deji@gmail.com')
       cy.get("input[value='Register']").click()
    })
})

