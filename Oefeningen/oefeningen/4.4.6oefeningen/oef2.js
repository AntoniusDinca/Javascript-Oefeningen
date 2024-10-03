const prompt = require("prompt-sync")();
let number = 0;



do{
    let number = Number(prompt("Geef een getal tussen 1 en 10. "));
}while(number >= 1 && number <= 10);
console.log(number + "Dit is het geldig getal;");
