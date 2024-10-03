const prompt = require("prompt-sync")();

let getal = Number(prompt("Geef een getal. "));
for(let i = getal; i >= 0; i-- ){
    console.log(i);
}