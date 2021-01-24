describe('Parking page', () => {
    it('should have the right title', () => {
        browser.url('http://www.shino.de/parkcalc/')
        expect(browser).toHaveTitle('Parking Cost Calculator');
    })

    // Valet Parking Test Cases
    it('Valet Parking: should stay for a day', () => {
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/22/2021');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 18.00");
    });

    it('Valet Parking: should stay for five hours or less', () => {
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStartDate = $('#StartingDate');
        inputEndDate = $('#LeavingDate');
        inputStartTime = $('#StartingTime');
        inputEndTime = $('#LeavingTime');
        inputStartDate.setValue('1/21/2021');
        inputEndDate.setValue('1/21/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('3:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 12.00");
    });

    
})

