/*function money(paint, caps, pokedollars){
    const remainingPaint = paint % caps;
    const bottleCapsPainted = Math.floor(paint/caps);
    const dollarsMade = bottleCapsPainted * pokedollars;
    return dollarsMade + remainingPaint;
}
console.log(money(14,3,10));*/


//PROBLEM 2: HOUSE ALARM
/*const doorOpen = true;
const windowOpen = true;

function houseAlarm(doorOpen, windowOpen){
    const alarmSilent = !(doorOpen || windowOpen);
    return alarmSilent
}
console.log(houseAlarm(doorOpen, windowOpen));

//PROBLEM 1:
const rideHeightOK = true;
const withAdult = true;
const healthHold = true;

function houseAlarm(rideHeightOK, withAdult, healthHold){
    const canRide = (rideHeightOK || withAdult) && !(healthHold);
    return canRide;
}
console.log(houseAlarm(rideHeightOK,withAdult, healthHold));*/

/*function whoIsInTheMiddle(a, b, c){
    if((a > b && a < c) || (a < b && a > c)) return a;
    if((b > a && b < c) || (b < a && b > c)) return b;
    else return c;
}
console.log(whoIsInTheMiddle(10, 5, 8))

function telemarketer(a, b, c, d){
    if(
        (a === 8 || a === 9) &&
        (d === 8 || d === 9) && 
        (b === c)
    ){return 'ignore';}
    else return 'answer';
}
console.log(telemarketer(8, 8, 6, 8))*/

//English or French
/*function engOrFr(num, ...lines){
    let sCount = 0;
    let tCount = 0;

    for(i = 0; i < num; i++){
        for(j = 0; j < lines[i].length; j++){
            if(lines[i][j] === 's' || lines[i][j] === 'S') sCount++;
            if(lines[i][j] === 't' || lines[i][j] === 'T') tCount++;
        }
    }

    if(tCount > sCount) return 'English';
    else if(sCount > tCount) return 'French';
    else return 'French';
}
console.log(engOrFr(4, "dans un livre", "Connaissant ce coeur qui doute,", "Tu me dirais de tirer un trait", "Quoi que partir me coute."));*/

//occupiedSpaces
function occupiedSpaces(num, yest, tdy){
    let occupiedBothDays = 0;

    for(i = 0; i < num; i++){
        if(yest[i] === tdy[i] && yest[i] === 'C' & tdy[i] === 'C'){
            occupiedBothDays++;
        };
    }
    return occupiedBothDays;
}
console.log(occupiedSpaces(7, 'CCCCCCC', 'C.C.C.C'));

