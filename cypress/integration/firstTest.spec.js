

/// <reference types="cypress"/>

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


})

