const prompt = require("prompt-sync")();

let number = Number(prompt("Geef me een getal. "));

while(number >= 0){

    console.log(number);
    number--;
}