const prompt = require("prompt-sync")();

let aantal = prompt("Geef een aantal rijen. ");
let regel = "";
let interval = 5;
let nieuw = "";
let vijfde = "";

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

    for(let z = 1; z <= aantal; z++){
        
        if(i % interval == 0){
            regel += "@";
        }
        else{
            regel = regel;
        }
        
    }


    console.log(regel);
    
}