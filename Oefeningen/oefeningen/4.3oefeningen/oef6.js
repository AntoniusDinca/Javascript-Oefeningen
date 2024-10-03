const prompt = require("prompt-sync")();

let getal = Number(prompt("Geef me een getal van 1 tot en met 3. "));
switch(getal){
    case 1:
        uitkomst = "Een";
        break;
    case 2:
        uitkomst = "Twee";
        break;
    case 3:
        uitkomst = "Drie";
        break;
}
console.log(uitkomst);