describe('Parking page', () => {
    it('should have the right title', () => {
        browser.url('http://www.shino.de/parkcalc/')
        expect(browser).toHaveTitle('Parking Cost Calculator');
    })
})


it('should demonstrate the getValue command', () => {
    const inputUser = $('#StartingDate');
    input.addValue('21/01/21')
    console.log(value); // outputs: "John Doe"
});