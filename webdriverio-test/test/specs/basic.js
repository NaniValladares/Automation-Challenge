describe('Parking page', () => {
    it('should have the right title', () => {
        browser.url('http://www.shino.de/parkcalc/')
        expect(browser).toHaveTitle('Parking Cost Calculator');
    })
})


it('demonstrate the selectByVisibleText command', () => {
    const selectBox = $('#selectbox');
    console.log(selectBox.getText('option:checked')); // returns "uno"
    selectBox.selectByVisibleText('cuatro');
    console.log(selectBox.getText('option:checked')); // returns "cuatro"
})