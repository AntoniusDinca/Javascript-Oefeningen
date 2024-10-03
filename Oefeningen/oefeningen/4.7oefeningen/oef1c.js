const prompt = require("prompt-sync")();

let aantal = prompt("Geef een aantal rijen. ");
let regel = "";
let spaties = "";

for(i = 0; i <= aantal; i++){
    regel = "";
    for(let j = 1; j <= aantal - i; j++){
        regel += " ";
    }
    for(let k = 1; k <= i; k++){
        regel += "*" ;
    }
    
    for(let k = 0; k <= i; k++){
        regel += "*" ;
    }
    for(let l = 1; l <= aantal - i; l++){
        regel += " ";
    }
    console.log(regel);
    
}