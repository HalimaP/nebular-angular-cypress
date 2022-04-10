import { navigateTo } from "../support/pageObjects/navigationPage"
import{onFormLayoutPage} from "../support/formLayoutsPage"
import {onDatePickerPage} from '../support/pageObjects/datePickerPage'
import { onSmartTable } from "../support/pageObjects/smartTablePage"
describe('Test With Page Objects', () =>{
beforeEach('open application', () => {
    cy.openHomePage()
})
it('verify navigations across the pages', () =>{

    navigateTo.formLayoutsPage()
    navigateTo.datePickerPage()
    navigateTo.tablesPage()
    navigateTo.toastrPage()
    navigateTo.tooltipPage()
})

it.only('should Inline and Basic form and select tomorrow date in the calendar', () => {
    navigateTo.formLayoutsPage()
    onFormLayoutPage.submitInlineFormWithNameAndEmail('Arthem', 'test@test.com')
    onFormLayoutPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password')
    navigateTo.datePickerPage()
    onDatePickerPage.selectCommonDatePickerDateFromToday(1)
    onDatePickerPage.selectDatePickerRangeFromToday(7, 14)
    navigateTo.tablesPage()
    onSmartTable.addNewRecordWithFirstAndlastName('halima', 'potur')
    onSmartTable.updateAgeByFirstName('halima', '36')
    onSmartTable.deleteRowByIndex(1)

})
})