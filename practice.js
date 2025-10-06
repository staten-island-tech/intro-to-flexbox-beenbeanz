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
/*function occupiedSpaces(num, yest, tdy){
    let occupiedBothDays = 0;

    for(i = 0; i < num; i++){
        if(yest[i] === tdy[i] && yest[i] === 'C' & tdy[i] === 'C'){
            occupiedBothDays++;
        };
    }
    return occupiedBothDays;
}
console.log(occupiedSpaces(7, 'CCCCCCC', 'C.C.C.C'));*/

//wizard
/*function wizard(start, num, ...duels){
    let currentObey = start;
    const wizardsArr = [start];
    let winner = '';
    let loser = '';

    for(i = 0; i < num; i++){
        winner = duels[i][0];
        loser = duels[i][duels[i].length - 1];
         if(loser === currentObey){
            currentObey = winner;

            let alreadyInList = false;

            for(j = 0; j < wizardsArr.length; j++){
                if(wizardsArr[j] === winner){
                    alreadyInList = true;
                    break;
                }
            }
            if(!alreadyInList) wizardsArr.push(winner);
         }        
    }
    return `${currentObey} ${wizardsArr.length}`;
}
console.log(wizard('N', 5, 'D A', 'N B', 'B A', 'C D', 'F A'));*/

/*const books = [
  { title: "The Silent Forest", author: "Emily Harper", year: 2015, genre: "Fiction", price: 12.99, stock: 8 },
  { title: "Digital Dreams", author: "Michael Chen", year: 2019, genre: "Science Fiction", price: 15.50, stock: 12 },
  { title: "Cooking with Love", author: "Sophia Martinez", year: 2020, genre: "Cooking", price: 22.00, stock: 5 },
  { title: "History of Time", author: "Dr. Alan Stone", year: 2010, genre: "History", price: 18.75, stock: 7 },
  { title: "Ocean Tales", author: "Liam Carter", year: 2018, genre: "Adventure", price: 11.99, stock: 14 },
  { title: "Mind Over Matter", author: "Rachel Kim", year: 2021, genre: "Self-Help", price: 14.25, stock: 9 },
  { title: "The Last Kingdom", author: "David Johnson", year: 2013, genre: "Fantasy", price: 16.40, stock: 10 },
  { title: "Code Masters", author: "Olivia Brown", year: 2022, genre: "Technology", price: 25.00, stock: 6 },
  { title: "Poetry of Stars", author: "Noah Wilson", year: 2017, genre: "Poetry", price: 9.99, stock: 20 },
  { title: "Secrets of the Mind", author: "Hannah Lee", year: 2016, genre: "Psychology", price: 19.99, stock: 11 },
  { title: "Into the Desert", author: "Ethan White", year: 2014, genre: "Adventure", price: 13.50, stock: 13 },
  { title: "World of Wonders", author: "Charlotte Green", year: 2023, genre: "Science", price: 27.80, stock: 4 },
  { title: "Legends Untold", author: "Daniel Wright", year: 2011, genre: "Fantasy", price: 15.20, stock: 8 },
  { title: "Journey to Space", author: "Amelia Young", year: 2020, genre: "Science Fiction", price: 21.00, stock: 7 },
  { title: "Life Lessons", author: "Benjamin Scott", year: 2019, genre: "Non-Fiction", price: 17.25, stock: 15 },
  { title: "Garden Magic", author: "Isabella Adams", year: 2012, genre: "Lifestyle", price: 12.00, stock: 9 },
  { title: "Haunted Nights", author: "Lucas King", year: 2021, genre: "Horror", price: 14.99, stock: 8 },
  { title: "Music of the Soul", author: "Grace Baker", year: 2017, genre: "Music", price: 23.50, stock: 6 },
  { title: "Ancient Civilizations", author: "Christopher Hall", year: 2010, genre: "History", price: 20.75, stock: 10 },
  { title: "Bright Futures", author: "Natalie Moore", year: 2022, genre: "Education", price: 18.00, stock: 12 }
];
//book titles
books.forEach(book => {
    console.log(book.title);
});
// filter price <10
books.filter(book => book.price > 10).forEach(book => console.log(book.title, book.year));*/