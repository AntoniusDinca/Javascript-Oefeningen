const prompt = require("prompt-sync")();

let begin = Number(prompt("Geef een begingetal. "));
let einde = Number(prompt("Geef een eindgetal. "));

for(let i = begin; i <= einde; i++ ){
    if(i % 2 == 0){
        console.log(i);
    }
    
}