const prompt = require("prompt-sync")();
let number = 0;
let sum = 0;


do{
    let number = Number(prompt("Geef een getal. "));
    sum += number
}while(number < 0);
console.log(sum);
