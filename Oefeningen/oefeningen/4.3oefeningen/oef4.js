const prompt = require("prompt-sync")();

let jaar = Number(prompt("Wat is het jaar?"));
let maand = Number(prompt("Welke maand is het?"))

if(maand == 2){
    if((jaar % 4 == 0 && jaar % 100 != 0 ) || jaar % 400 == 0){
        console.log("Februari in een schrikkeljaar");
    }
}else {
    console.log("Geen februari")
}