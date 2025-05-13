/*today is 31/12/2024*/
function calculater() {
    let Day = document.getElementById('day').value;
    let Month = document.getElementById('month').value;
    let Year = document.getElementById('year').value;
    let output = 0;
    let boucleprint = 0;
    let loopprint = 0;
    let counterprint = 0;
    /*the day conditions*/
    if (isNaN(Day) || Day < 1 || Day > 31) {
        document.getElementById('day').style.color = 'red'
        document.getElementById('day').style.borderColor = 'red'
        document.getElementById('daycolorchange').style.color = 'red'
        document.getElementById('printday').innerHTML = '<p id="printday">Must be a valid day</p>'
    }
    else {
        document.getElementById('day').removeAttribute('style');
        document.getElementById('daycolorchange').removeAttribute('style');
        document.getElementById('printday').innerHTML = '';
        let d = 0;
        let boucle = 0;
        if (Month == 2) {
            for (d = Day; d <= 29; d++) {
                boucle += 1;
            }
        }
        else if (Month == 1 || Month == 3 || Month == 5 || Month == 7 || Month == 8 || Month == 10 || Month == 12) {
            for (d = Day; d <= 31; d++) {
                boucle += 1;
            }
        }
        else {
            for (d = Day; d <= 30; d++) {
                boucle += 1;
            }
        }
        output += 1;
        boucleprint = boucle;
    }

    /*the month condition*/
    if (isNaN(Month) || Month < 1 || Month > 12) {
        document.getElementById('month').style.color = 'red'
        document.getElementById('month').style.borderColor = 'red'
        document.getElementById('monthcolorchange').style.color = 'red'
        document.getElementById('printmonth').innerHTML = '<p id="printmonth">Must be a valid month</p>'
    }
    else {
        document.getElementById('month').removeAttribute('style');
        document.getElementById('monthcolorchange').removeAttribute('style');
        document.getElementById('printmonth').innerHTML = '';
        let m = 0;
        let loop = 0;
        for (m = Month; m < 12; m++) {
            loop += 1;
        }
        output += 1;
        loopprint = loop
    }

    /*the year condition*/
    if ((isNaN(Year)) || (Year < 1920 || Year > 2024)) {
        document.getElementById('year').style.color = 'red'
        document.getElementById('year').style.borderColor = 'red'
        document.getElementById('yearcolorchange').style.color = 'red'
        document.getElementById('printyear').innerHTML = '<p id="printyear">Must be a valid year</p>'
    }
    else {
        document.getElementById('year').removeAttribute('style');
        document.getElementById('yearcolorchange').removeAttribute('style');
        document.getElementById('printyear').innerHTML = '';
        let i = Number(0);
        let counter = Number(0);
        for (i = Year; i < 2024; i++) {
            counter = counter + 1;
        }
        output += 1;
        counterprint = counter;
    }

    /*the output*/
    if (output == 3) {
        document.getElementById('thespand').innerHTML = `${boucleprint}`
        document.getElementById('thespanm').innerHTML = `${loopprint}`
        document.getElementById('thespan').innerHTML = `${counterprint}`
    }
    else{
        document.getElementById('thespand').innerHTML = '--'
        document.getElementById('thespanm').innerHTML = '--'
        document.getElementById('thespan').innerHTML = '--'
    }

}