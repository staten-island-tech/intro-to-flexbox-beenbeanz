function money(paint, caps, pokedollars){
    const remainingPaint = paint % caps;
    const bottleCapsPainted = Math.floor(paint/caps);
    const dollarsMade = bottleCapsPainted * pokedollars;
    return dollarsMade + remainingPaint;
}
console.log(money(14,3,10));