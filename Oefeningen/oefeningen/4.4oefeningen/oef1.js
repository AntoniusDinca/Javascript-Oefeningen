const prompt = require("prompt-sync")();

let getal = Number(prompt("Geef een getal. "));
for(let i = 1; i <= getal; i++ ){
    console.log(i);
}