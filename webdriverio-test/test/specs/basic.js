describe('Parking page', () => {
    it('should have the right title', () => {
        browser.url('http://www.shino.de/parkcalc/')
        expect(browser).toHaveTitle('Parking Cost Calculator');
    })

    it('should display the calculator', () => {
        const Calculator = $("body > form > table > tbody");
        expect(Calculator).toBeVisible();
    })

    it('should have clickable button', () => {
        const ClickButton = $("body > form > input[type=submit]:nth-child(3)");
        expect(ClickButton).toBeClickable();
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

    it('Valet Parking: should stay between one and two days', () => {
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStartDate = $('#StartingDate');
        inputEndDate = $('#LeavingDate');
        inputStartTime = $('#StartingTime');
        inputEndTime = $('#LeavingTime');
        inputStartDate.setValue('1/21/2021');
        inputEndDate.setValue('1/22/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('3:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 36.00");
    });
    

    //Short-Term (hourly) Parking
    it('Short-Term: should stay for one hour', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(2)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStartTime = $('#StartingTime');
        inputEndTime = $('#LeavingTime');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/21/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('1:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 2.00");
    });
    
    it('Short-Term: should stay for two hours', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(2)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStartTime = $('#StartingTime');
        inputEndTime = $('#LeavingTime');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/21/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('2:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 4.00");
    });

    it('Short-Term: should stay for five hours and a half', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(2)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStartTime = $('#StartingTime');
        inputEndTime = $('#LeavingTime');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/21/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('5:30');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 11.00");
    });

    it('Short-Term: should stay for a complete day', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(2)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStartTime = $('#StartingTime');
        inputEndTime = $('#LeavingTime');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/22/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('12:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 24.00");
    });

    it('Short-Term: should stay for a day and 2 hours', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(2)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStartTime = $('#StartingTime');
        inputEndTime = $('#LeavingTime');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/22/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('2:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 28.00");
    });

    //Long-Term Garage Parking
    it('Long-Term Garage Parking: should stay for one hour', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(4)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStartTime = $('#StartingTime');
        inputEndTime = $('#LeavingTime');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/21/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('1:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 2.00");
    });

    it('Long-Term Garage Parking: should stay for six hours', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(4)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStartTime = $('#StartingTime');
        inputEndTime = $('#LeavingTime');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/21/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('6:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 12.00");
    });

    it('Long-Term Garage Parking: should stay for ten hours', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(4)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStartTime = $('#StartingTime');
        inputEndTime = $('#LeavingTime');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/21/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('10:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 12.00");
    });

    it('Long-Term Garage Parking: should stay for a day maximun', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(4)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/22/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('12:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 12.00");
    });

    it('Long-Term Garage Parking: should stay for a week with seven day free', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(4)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/28/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('12:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 72.00");
    });

    it('Long-Term Garage Parking: should stay for a week and four hours', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(4)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/28/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('04:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 80.00");
    });


    //Long-Term Surface Parking (North Lot)
    it('Long-Term Surface Parking: should stay for one hour', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(5)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/21/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('1:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 2.00");
    });
    
    it('Long-Term Surface Parking: should stay for four hours', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(5)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/21/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('4:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 8.00");
    });

    it('Long-Term Surface Parking: should stay for ten hours and a half', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(5)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/21/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('10:30');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 10.00");
    });

    it('Long-Term Surface Parking: should stay for a day', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(5)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/22/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('12:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 10.00");
    });

    it('Long-Term Surface Parking: should stay for more than one day', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(5)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/22/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('4:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 18.00");
    });

    it('Long-Term Surface Parking: should stay for one week', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(5)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/28/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('12:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 60.00");
    });

    it('Long-Term Surface Parking: should stay for a week and two days', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(5)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/30/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('12:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 80.00");
    });


    //Economy Lot Parking
    it('Economy Lot Parking: should stay for one hour', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(3)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStartTime = $('#StartingTime');
        inputEndTime = $('#LeavingTime');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/21/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('1:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 2.00");
    });

    it('Economy Lot Parking: should stay for three hour', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(3)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStartTime = $('#StartingTime');
        inputEndTime = $('#LeavingTime');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/21/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('3:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 6.00");
    });

    it('Economy Lot Parking: should stay for ten hours', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(3)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStartTime = $('#StartingTime');
        inputEndTime = $('#LeavingTime');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/21/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('10:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 9.00");
    });

    it('Economy Lot Parking: should stay for a day', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(3)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStartTime = $('#StartingTime');
        inputEndTime = $('#LeavingTime');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/22/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('12:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 9.00");
    });

    it('Economy Lot Parking: should stay for a week', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(3)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStartTime = $('#StartingTime');
        inputEndTime = $('#LeavingTime');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/28/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('12:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 54.00");
    });

    it('Economy Lot Parking: should stay for a week and two days', () => {
        ParkingLot = $("#ParkingLot > option:nth-child(3)");
        ParkingLot.click();
        result= $("body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b");
        Calculatebutton = $("body > form > input[type=submit]:nth-child(3)");
        inputStart = $('#StartingDate');
        inputFinish = $('#LeavingDate');
        inputStartTime = $('#StartingTime');
        inputEndTime = $('#LeavingTime');
        inputStart.setValue('1/21/2021');
        inputFinish.setValue('1/30/2021');
        inputStartTime.setValue('12:00');
        inputEndTime.setValue('12:00');
        Calculatebutton.click();
        expect(result).toHaveTextContaining("$ 72.00");
    });

})

