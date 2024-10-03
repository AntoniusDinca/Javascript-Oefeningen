const prompt = require("prompt-sync")();

let inkomen = prompt("Hoeveel is jouw inkomen? ");
let belasting = 0;
let belastingsbedrag = 0;
if(inkomen < 10000){
    belasting = 0;
} else if(inkomen > 10000 && inkomen < 20000){
    belasting = 0.1;
} else if(inkomen > 20000 && inkomen < 50000){
    belasting = 0.2;
} else if(inkomen > 50000){
    belasting = 0.3;
}
belastingsbedrag = inkomen * belasting;
inkomen = inkomen - belastingsbedrag;
console.log("Je belasting is " + belastingsbedrag + " en je houdt " + inkomen + " over.");