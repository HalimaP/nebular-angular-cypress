

/// <reference types="cypress"/>

const { TreeNodeExpanderComponent } = require("angular-tree-component")
const { ThemeManager } = require("tinymce")

describe('Our first suite', () => {


    it('First test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //search element by tag name
        cy.get('input')

        //find element by id
        cy.get('#inputEmail1')

        //Find el. by class name

        cy.get('.input-full-width')

        //find el. by Attribute name

        cy.get('[placeholder]')
        //Find element by attribute name and value

        cy.get('[placeholder="Email"]')
        //Find element by class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //Find element by tag name  Attriute with value

        cy.get('input[placeholder="Email"]')

        //Find by two different attributes
        cy.get('[placeholder = "Email"][type="email"]')

        //find element by tag name, Attribute with value, ID and class name

        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        //The most recomended way by cypress
        cy.get('[data-cy="imputEmail1"]')

    })

    it.only('second test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.get('[data-cy="signInButton"]')
        cy.contains('Sign in')
        cy.contains('[status="warning"]', 'Sign in')
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkBox')
            .click()

            cy.contains('nb-card','Horizontal form').find('[type="email"]')

    })
    it.only('then and wrap methods', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')
        cy.contains('nb-card', 'Using the Grid').then(firstForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')
            cy.contains('nb-card', 'Basic form').then(secondForm=> {
                const passwordLabelSecond = secondForm.find('[for="exampleInputPassword1"]').text()
                expect(passwordLabelFirst).to.equal(passwordLabelSecond)

                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
            })
        })
    })
it.only('invoke command', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    // 1 example
    cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')
    // example 2
    // U ovom primjeru koristimo jquery formu, koristimo then-jquery funkciju, u parametar 
    // label pohranjujemo web element for="exampleInputEmail1" i onda pravimo tvrdnju da
    // label jednaka Email address
    // Primjer 3 je isti kao drugi samo koristimo invoke() koji je cypress metod i then koji je takodjer cypress
    // jedina razlika izmedju ova dva primjera je to sto u drugom primjeru koristimo jquery
    // a u trecem cypress metode
    cy.get('[for="exampleInputEmail1"]').then(label => {
        expect(label.text()).to.equal('Email address')
    })
    // example3
    cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
        expect(text).to.equal('Email address')
    })
    cy.contains('nb-card', 'Basic form')
    .find('nb-checkbox')
    .click()
    .find('.custom-checkbox')
    .invoke('attr', 'class')
    // .should('contain', 'checked')
    .then(classValue => {
        expect(classValue).to.contain('checked')
    })

})
it.only('assert property', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Datepicker').click()
    cy.contains('nb-card', 'Common Datepicker').find('input').then(input =>{
        cy.wrap(input).click()
        cy.get('nb-calendar-day-picker').contains('17').click()
        cy.wrap(input).invoke('prop', 'value').should('contain', 'Apr 17, 2022' )
    })
   
})
it.only('radio buttons', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    cy.contains('nb-card','Using the Grid').find('[type="radio"]').then(radioButtons => {
        cy.wrap(radioButtons).first().check({force:true}).should('be.checked')
        cy.wrap(radioButtons).eq(1).check({force:true})
        cy.wrap(radioButtons)
        // ovdje mozemo koristiti first() method ili eq(0) 
        // isto je eq(0)=znaci da uzimamo prvi element
        // ako stavim .eq(1) to je drugi element ...
        .eq(0).should('not.be.checked')
        cy.wrap(radioButtons).eq(2).should('be.disabled')
    })
})
it.only('check boxes', () =>{
    cy.visit('/')
    cy.contains('Modal & Overlays').click()
    cy.contains('Toastr').click()
    // cy.contains('nb-card', 'Toaster configuration').find('[type ="checkbox"]').then(checkBox =>{

    // })
    // better approach is bellow ali ako koristimo ovaj nacin onda ce svi check box elementi
    // biti oznaceni jer stavimo force:true
    cy.get('[type ="checkbox"]').check({force:true})
    // zato moramo koristiti click()
    cy.get('[type ="checkbox"]').eq(0).click({force:true})
    cy.get('[type ="checkbox"]').eq(1).check({force:true})

})
})

