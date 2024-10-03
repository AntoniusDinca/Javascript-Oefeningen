const prompt = require("prompt-sync")();

let text = prompt("Geef een tekst. ");
let lengte = text.length;

for(let i = lengte; i > 0; i-- ){
    
    console.log(text[i- 1]);
    
}