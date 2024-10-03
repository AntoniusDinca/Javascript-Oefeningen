const prompt = require("prompt-sync")();

let aantal = prompt("Geef een aantal rijen. ");
let regel = "";
for(i = 1; i <= aantal; i++){
    regel += "*";
    console.log(regel);
}
