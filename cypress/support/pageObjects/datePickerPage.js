function selectDateFromCurrent(day){
    let date = new Date()
    date.setDate(date.getDate() + day)
    let futureDay = date.getDate()
    let futureMonth = date.toLocaleString('default', {month:'short'})
    let dateAssert = futureMonth +' '+futureDay+', '+date.getFullYear()
    cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttribute =>{
        if(!dateAttribute.includes(futureMonth)){
            cy.get('[data-name="chevron-right"]').click()
            selectDateFromCurrent(day)
            // cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click()
        }else{
            cy.get('.day-cell').not('bounding-month').contains(futureDay).click()
        }
    })
    return dateAssert
}

export class DatePickerPage{
selectCommonDatePickerDateFromToday(dayFromToday){
    cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
        cy.wrap(input).click()
        let dataAssert = selectDateFromCurrent(dayFromToday)
       

        cy.wrap(input).invoke('prop', 'value').should('contain', dataAssert)
        cy.wrap(input).should('have.value', dataAssert)
    })
}
selectDatePickerRangeFromToday(firstDay, secondDay){
    cy.contains('nb-card', 'Datepicker With Range').find('input').then(input => {
        cy.wrap(input).click()
        let dateAssertFirst = selectDateFromCurrent(firstDay)
        let dateAssertSecond = selectDateFromCurrent(secondDay)
        const finalDate = dateAssertFirst + ' - '+dateAssertSecond
        cy.wrap(input).invoke('prop', 'value').should('contain', finalDate)
        cy.wrap(input).should('have.value', finalDate)
    })
}
}
export const onDatePickerPage = new DatePickerPage()