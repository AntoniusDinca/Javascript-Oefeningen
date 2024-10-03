const prompt = require("prompt-sync")();

let onder = prompt("Geef een ondergrens. ");
let boven = prompt("Geef een bovengrens. ");
let getal = 0;
let drie = "";

for(i = onder; i <= boven; i++){
    
    if(i % 3 == 0){
        getal += i;
    }
    else{
        getal = getal;
    }
    
}
console.log(getal);