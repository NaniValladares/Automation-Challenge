describe('Parking page', () => {
    it('should have the right title', () => {
        browser.url('http://www.shino.de/parkcalc/')
        expect(browser).toHaveTitle('Parking Cost Calculator');
    })

    it('should stay for a day', () => {
        const result= "/html/body/form/table/tbody/tr[4]/td[2]/span[1]/b";
        const Calculatebutton = "/html/body/form/input[2]";
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/22/2021');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$18.00");
    });


    
})



